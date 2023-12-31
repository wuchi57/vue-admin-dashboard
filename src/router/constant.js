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
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/example',
    name: 'example',
    component: Layout,
    meta: { title: 'Example', icon: 'form' },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/table'),
        meta: {title: 'Table', icon: 'table'}
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/tree'),
        meta: {title: 'Tree', icon: 'tree'}
      }
    ],
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'form',
        component: () => import('@/views/form'),
        meta: {title: 'Form', icon: 'form'}
      }
    ],
  },
  {
    path: '/nested',
    component: Layout,
    name: 'nested',
    meta: { title: 'Nested', icon: 'nested' },
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
        meta: { title: 'External Link', icon: 'link' },
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
