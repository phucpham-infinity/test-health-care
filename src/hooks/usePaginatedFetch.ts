import { useState } from 'react'

interface PaginatedState<T> {
  data: T[]
  loading: boolean
  error: string | null
  hasMore: boolean
}

export function usePaginatedFetch<T>(baseUrl: string, limit: number) {
  const [state, setState] = useState<PaginatedState<T>>({
    data: [],
    loading: false,
    error: null,
    hasMore: true
  })
  const [page, setPage] = useState(1)

  const fetchNextPage = async () => {
    if (state.loading || !state.hasMore) return

    setState((prev) => ({ ...prev, loading: true }))
    try {
      const response = await fetch(`${baseUrl}?page=${page}&limit=${limit}`)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      const newData = await response.json()
      setState((prev) => ({
        data: [...prev.data, ...newData],
        loading: false,
        error: null,
        hasMore: newData.length === limit
      }))
      setPage((prev) => prev + 1)
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: (error as Error).message
      }))
    }
  }

  return { ...state, fetchNextPage }
}
