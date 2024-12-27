import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { routesConfig } from './routesConfig'
import { useAuth } from '@/hooks/useAuth'
import LazyWrapper from '@/components/common/LazyWrapper'

import NotFound from '@/pages/NotFound/NotFound'

export const componentMap = {
  LoginPage: () => import('@/pages/public/LoginPage'),
  ColumnPage: () => import('@/pages/public/ColumnPage'),
  MyRecord: () => import('@/pages/private/MyRecord'),
  TopPage: () => import('@/pages/private/TopPage')
}

const LazyLoadComponent = (component: string) => {
  const importFn = componentMap[component]
  if (!importFn)
    throw new Error(`Component ${component} not found in componentMap`)
  return React.lazy(importFn)
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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
