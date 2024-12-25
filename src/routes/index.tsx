import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { routesConfig } from './routesConfig'
import { useAuth } from '@/hooks/useAuth'

const LazyLoadComponent = (component: string) => {
  return React.lazy(() => import(`@/pages/${component}`))
}

// Wrapper Component to handle Suspense
const LazyWrapper: React.FC<{ component: React.LazyExoticComponent<any> }> = ({
  component: Component
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Routes>
        {routesConfig.map((route) => {
          const Component = LazyLoadComponent(route.component)

          if (route.isPrivate) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  isAuthenticated ? (
                    <LazyWrapper component={Component} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
            )
          }

          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LazyWrapper component={Component} />}
            />
          )
        })}

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  )
}
