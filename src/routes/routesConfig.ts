export const routesConfig = [
  {
    path: '/',
    component: 'ColumnPage',
    isPrivate: false
  },
  {
    path: '/login',
    component: 'LoginPage',
    isPrivate: false
  },
  {
    path: '/top-page',
    component: 'TopPage',
    isPrivate: true
  },
  {
    path: '/my-record',
    component: 'MyRecord',
    isPrivate: true
  }
]
