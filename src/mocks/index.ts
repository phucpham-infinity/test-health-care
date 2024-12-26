import { setupWorker } from 'msw/browser'
import {handlers} from "@/mocks/handlers.ts";

export const mockServer = setupWorker(...handlers)
