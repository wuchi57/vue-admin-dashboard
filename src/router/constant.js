export default [
  {
    path: '/',
    name: 'home',
    component: () => import('views/home'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('views/about'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login'),
  },
]
