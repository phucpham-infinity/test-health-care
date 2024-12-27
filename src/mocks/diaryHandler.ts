import { http, HttpResponse } from 'msw'

const diaryEntries = Array.from({ length: 100 }, (_, index) => ({
  date: `2021.05.${String(21 - Math.floor(index / 5)).padStart(2, '0')}`,
  time: `23:${String(25 - (index % 5) * 5).padStart(2, '0')}`,
  content: `私の日記の記録が一部表示されます。エントリー ${index + 1} の内容が表示されます。\nテキストテキストテキスト \nテキストテキストテキスト \nテキストテキストテキスト....`
}))

export const diaryHandlers = [
  http.get('/api/diary', (req) => {
    const url = new URL(req.request?.url || '')
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const limit = parseInt(url.searchParams.get('limit') || '8', 10)

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedRecords = diaryEntries.slice(startIndex, endIndex)
    return HttpResponse.json(paginatedRecords)
  })
]
