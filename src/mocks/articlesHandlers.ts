import { http, HttpResponse } from 'msw'
import {
  getRandomDate,
  getRandomNumber,
  getRandomTime
} from '@/mocks/helpers.ts'

const categories = [
  { id: 1, title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
  { id: 2, title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
  { id: 3, title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
  { id: 4, title: 'RECOMMENDED HEALTH', subtitle: '健康' }
]

const articlesByCategory = {
  1: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: getRandomDate(),
    time: getRandomTime(),
    description: `美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう`,
    tags: ['ダイエット', '基本', 'DHA'],
    imageUrl: `https://picsum.photos/id/${getRandomNumber()}/200`
  })),
  2: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: getRandomDate(),
    time: getRandomTime(),
    description: `美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう`,
    tags: ['ダイエット', '基本', 'DHA'],
    imageUrl: `https://picsum.photos/id/${getRandomNumber()}/200`
  })),
  3: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: getRandomDate(),
    time: getRandomTime(),
    description: `美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう`,
    tags: ['ダイエット', '基本', 'DHA'],
    imageUrl: `https://picsum.photos/id/${getRandomNumber()}/200`
  })),
  4: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: getRandomDate(),
    time: getRandomTime(),
    description: `美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう`,
    tags: ['ダイエット', '基本', 'DHA'],
    imageUrl: `https://picsum.photos/id/${getRandomNumber()}/200`
  }))
}

export const articlesHandlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json(categories)
  }),

  http.get('/api/articles', (req: any) => {
    const url = new URL(req.request?.url || '')
    const categoryId = parseInt(url.searchParams.get('categoryId') || '1', 10)
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const limit = parseInt(url.searchParams.get('limit') || '8', 10)

    const articles = articlesByCategory[categoryId] || []
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedArticles = articles.slice(startIndex, endIndex)

    return HttpResponse.json(paginatedArticles)
  })
]
