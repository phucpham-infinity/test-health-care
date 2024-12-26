import { useState, useCallback } from 'react'

type Options = {
  method?: string
  headers?: HeadersInit
  body?: BodyInit | null
}

export const useFetch = <T = any>(url?: string, options: Options = {}) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const stableOptions = JSON.stringify(options) // Serialize options for consistent comparison

  const fetchData = useCallback(
    async (_url?: string) => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(_url ?? url, JSON.parse(stableOptions))
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const result = (await response.json()) as T
        setData(result)
      } catch (err) {
        setError(err as Error)
        setData(null)
      } finally {
        setIsLoading(false)
      }
    },
    [url, stableOptions]
  )

  return { data, isLoading, error, fetchData }
}
