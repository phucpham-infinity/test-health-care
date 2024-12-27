import { http, HttpResponse } from 'msw'
import { getRandomNumber, getRandomTime } from '@/mocks/helpers.ts'

const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack']

const mealRecords = meals.reduce(
  (acc, meal) => {
    acc[meal] = Array.from({ length: 200 }, (_, i) => ({
      id: (i + 1) * 3,
      time: getRandomTime(),
      type: meal,
      imageUrl: `https://picsum.photos/id/${getRandomNumber()}/200`
    }))
    return acc
  },
  {} as Record<string, any[]>
)

export const mealsHandlers = [
  http.get('/api/meals', (req: any) => {
    const url = new URL(req.request?.url || '')
    const mealType = url.searchParams.get('mealType') || 'Breakfast'
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const limit = parseInt(url.searchParams.get('limit') || '8', 10)

    const records = mealRecords[mealType] || []
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedRecords = records.slice(startIndex, endIndex)

    return HttpResponse.json(paginatedRecords)
  }),

  http.get('/api/meal-types', () => {
    return HttpResponse.json(meals)
  })
]
