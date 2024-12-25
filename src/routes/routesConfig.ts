export const routesConfig = [
  {
    path: '/',
    component: 'public/Home',
    isPrivate: false
  },
  {
    path: '/about',
    component: 'public/About',
    isPrivate: false
  },
  {
    path: '/column',
    component: 'public/Column',
    isPrivate: false
  },
  {
    path: '/my-record',
    component: 'private/MyRecord',
    isPrivate: true
  },
  {
    path: '/diary',
    component: 'private/Diary',
    isPrivate: true
  },
  {
    path: '/exercise',
    component: 'private/Exercise',
    isPrivate: true
  }
]
