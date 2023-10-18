import Layout from '@/layout'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login'),
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('views/home'),
        meta: {
          title: 'Dashboard',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('views/about'),
        meta: {
          title: 'About',
        },
      },
    ],
  },
  {
    path: '/example',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/table'),
        meta: {title: 'Table'}
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/tree'),
        meta: {title: 'Tree'}
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'form',
        component: () => import('@/views/form'),
        meta: {title: 'Form'}
      }
    ]
  },
  {
    path: '/external-link',
    name: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: {
          title: 'External Link',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('views/404'),
  },
]
