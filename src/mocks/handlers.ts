import { http, HttpResponse } from 'msw'

const categories = [
  { id: 1, title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
  { id: 2, title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
  { id: 3, title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
  { id: 4, title: 'RECOMMENDED HEALTH', subtitle: '健康' }
]

const articlesByCategory = {
  1: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    date: '2021.05.17',
    time: '23:25',
    title: `COLUMN Article ${i + 1}`,
    tags: ['Column', 'DHA'],
    imageUrl: 'https://via.placeholder.com/150'
  })),
  2: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    date: '2021.05.17',
    time: '23:25',
    title: `DIET Article ${i + 1}`,
    tags: ['Diet', 'Health'],
    imageUrl: 'https://via.placeholder.com/150'
  })),
  3: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: '2021.05.17',
    time: '23:25',
    title: `BEAUTY Article ${i + 1}`,
    tags: ['Beauty', 'Care'],
    imageUrl: 'https://via.placeholder.com/150'
  })),
  4: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    date: '2021.05.17',
    time: '23:25',
    title: `HEALTH Article ${i + 1}`,
    tags: ['Health', 'Life'],
    imageUrl: 'https://via.placeholder.com/150'
  }))
}

export const handlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json(categories)
  }),

  http.get('/api/articles', (req: any) => {
    const categoryId = parseInt(
      req.url.searchParams.get('categoryId') || '1',
      10
    )
    const page = parseInt(req.url.searchParams.get('page') || '1', 10)
    const limit = parseInt(req.url.searchParams.get('limit') || '4', 10)

    const articles = articlesByCategory[categoryId] || []
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedArticles = articles.slice(startIndex, endIndex)

    return HttpResponse.json(paginatedArticles)
  })
]
