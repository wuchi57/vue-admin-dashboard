import Layout from '@/layout'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login'),
    meta: { hidden: true }
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'Home' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: 'Dashboard' },
      },
    ],
  },
  {
    path: '/example',
    name: 'example',
    component: Layout,
    meta: { title: 'Example' },
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
    ],
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    meta: {title: 'Form'},
    children: [
      {
        path: 'index',
        name: 'form',
        component: () => import('@/views/form'),
        meta: {title: 'Form'}
      }
    ],
  },
  {
    path: '/nested',
    component: Layout,
    name: 'nested',
    meta: { title: 'Nested' },
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
    meta: {},
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', },
      },
    ],
  },
  {
    path: '/external',
    name: 'external',
    component: Layout,
    meta: {title: 'Children Hidden'},
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', hidden: true },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('views/404'),
    meta: { hidden: true }
  },
]
