<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in list" :key="item">
      <span v-if="item.meta.redirect === 'noRedirect' || index === list.length - 1" class="no-redirect">
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleClick(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { pathToRegexp } from 'path-to-regexp'

const list = ref([])

const route = useRoute()

function getBreadcrumb() {
  // 只展示具有 meta.title 的 routes
  let matched = route.matched.filter((item) => item.meta && item.meta.title)
  if (!isDashboard(matched[0])) {
    matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
  }
  list.value = matched.filter((item) => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false
  })
}

function isDashboard(route) {
  const name = route && route.name
  if (!name) return
  return name.trim().toLocaleLowerCase() === 'dashboard'
}

const router = useRouter()

function handleClick(item) {
  const { path, redirect } = item
  const { params } = route
  console.log('handleBreadcrumbClick: ', path);

  // if (redirect) return router.push(redirect)
  // router.push({ path })
}

watch(
  () => route.matched,
  () => {
    getBreadcrumb()
  },
  { immediate: true }
)
</script>

<style scoped lang="sass">
.breadcrumb
  margin-left: 8px

.no-redirect
  color: #97a8be
</style>
