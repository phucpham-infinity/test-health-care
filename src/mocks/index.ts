import { setupWorker } from 'msw/browser'
import { articlesHandlers } from '@/mocks/articlesHandlers.ts'
import { mealsHandlers } from '@/mocks/mealsHandlers.ts'
import { recordsHandlers } from '@/mocks/recordsHandlers.ts'
import { exercisesHandlers } from '@/mocks/exercisesHandlers.ts'
import { diaryHandlers } from '@/mocks/diaryHandler.ts'

export const mockServer = setupWorker(
  ...articlesHandlers,
  ...mealsHandlers,
  ...recordsHandlers,
  ...exercisesHandlers,
  ...diaryHandlers
)
