import { http, HttpResponse } from 'msw'

const generateRandomData = (
  size: number,
  min: number,
  max: number,
  filter: string
) => {
  const getRandomValue = (min: number, max: number) =>
    Math.random() * (max - min) + min

  const japaneseWeekDays = [
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
    '日曜日'
  ]

  return Array.from({ length: size }, (_, i) => {
    let label = ''
    switch (filter) {
      case 'day': // Hours for day filter
        label = `${i + 1}時`
        break
      case 'week': // Days of the week in Japanese
        label = japaneseWeekDays[i % japaneseWeekDays.length]
        break
      case 'month': // Days of the month
        label = `${i + 1}日`
        break
      case 'year': // Months of the year
        label = `${i + 1}月`
        break
      default:
        label = `${i + 1}`
    }
    return {
      label,
      value1: getRandomValue(min, max), // Random value for value1
      value2: getRandomValue(min, max) // Random value for value2
    }
  })
}

const data = {
  day: generateRandomData(24, 40, 60, 'day'), // 24 hourly data points
  week: generateRandomData(7, 35, 70, 'week'), // 7 days of data
  month: generateRandomData(30, 30, 80, 'month'), // 30 days of data
  year: generateRandomData(12, 20, 90, 'year') // 12 months of data
}
export const recordsHandlers = [
  http.get('/api/records', (req: any) => {
    const url = new URL(req.request?.url || '')
    const filter = url.searchParams.get('filter') || 'year'

    return HttpResponse.json(data[filter as keyof typeof data])
  })
]
