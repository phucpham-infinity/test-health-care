import { http, HttpResponse } from 'msw'

type ExerciseRecord = {
  date: string
  activity: string
  duration: string
  calories: string
}

const generateExerciseRecords = (count: number): ExerciseRecord[] => {
  const activities = [
    '家事全般 (立位・軽い)',
    'ウォーキング (中速)',
    'ランニング (速い)',
    'ヨガ (軽い運動)',
    'サイクリング (中速)'
  ]
  const durations = ['10 min', '15 min', '20 min', '30 min']
  const calories = ['26kcal', '50kcal', '75kcal', '100kcal']

  const records: ExerciseRecord[] = []

  for (let i = 0; i < count; i++) {
    const activity = activities[Math.floor(Math.random() * activities.length)]
    const duration = durations[Math.floor(Math.random() * durations.length)]
    const calorie = calories[Math.floor(Math.random() * calories.length)]

    records.push({
      date: '2021.05.21',
      activity,
      duration,
      calories: calorie
    })
  }

  return records
}

export const exercisesHandlers = [
  http.get('/api/exercises', () => {
    return HttpResponse.json(generateExerciseRecords(50))
  })
]
