import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { mockServer } from '@/mocks'

mockServer.start().then(() => {
  createRoot(document.getElementById('root')!).render(<App />)
})
