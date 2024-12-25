import { AppRoutes } from './routes'
import { AuthProvider } from '@/context/AuthContext'

import '@/styles/global.scss'

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
