import { setupWorker } from 'msw/browser'
import { articlesHandlers } from '@/mocks/articlesHandlers.ts'
import { mealsHandlers } from '@/mocks/mealsHandlers.ts'

export const mockServer = setupWorker(...articlesHandlers, ...mealsHandlers)
