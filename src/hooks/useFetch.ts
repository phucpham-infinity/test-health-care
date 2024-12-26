import { useState, useCallback } from 'react'

type Options = {
  method?: string
  headers?: HeadersInit
}

const buildQueryParams = (
  params: Record<string, string | number | boolean>
) => {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    query.append(key, String(value))
  })
  return query.toString()
}

export const useFetch = <T = any>(url?: string, options: Options = {}) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const stableOptions = JSON.stringify(options) // Serialize options for consistent comparison

  const fetchData = useCallback(
    async (
      queryParams?: Record<string, string | number | boolean>,
      body?: Record<string, any>
    ) => {
      setIsLoading(true)
      setError(null)

      try {
        let fullUrl = url
        if (queryParams) {
          const queryString = buildQueryParams(queryParams)
          fullUrl = `${fullUrl}?${queryString}`
        }

        const fetchOptions: RequestInit = {
          ...JSON.parse(stableOptions),
          body: body ? JSON.stringify(body) : null,
          headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
          }
        }

        const response = await fetch(fullUrl as string, fetchOptions)
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
