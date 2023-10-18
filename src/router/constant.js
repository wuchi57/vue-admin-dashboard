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
    path: '/nested',
    component: Layout,
    name: 'nested',
    meta: {
      title: 'Nested'
    },
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: () => import('@/views/nested/menu1/index.vue'),
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            name: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            meta: { title: 'Menu1-1'}
          },
          {
            path: 'menu1-2',
            name: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            meta: { title: 'Menu1-2'},
            children: [
              {
                path: 'menu1-2-1',
                name: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                meta: { title: 'Menu1-2-1'}
              },
              {
                path: 'menu1-2-2',
                name: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                meta: { title: 'Menu1-2-2'}
              },
            ]
          },
          {
            path: 'menu1-3',
            name: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            meta: { title: 'Menu1-3'}
          },
        ]
      },
      {
        path: 'menu2',
        name: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        meta: { title: 'Menu2'}
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
