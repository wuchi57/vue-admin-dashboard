<template>
  <div class="app-wrapper" :class="{ isExpanded: useAppStore().sidebar.opened }">
    <Sidebar />
    <div class="main-container">
      <Navbar />
      <TagsView />
      <Main />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Main from './components/main'
import TagsView from './components/tags-view'
import { useAppStore } from '@/store/index.js'

const sidebarWidth = computed(() => {
  return useAppStore().sidebar.opened ? '210px' : '54px'
})
provide('sidebarWidth', sidebarWidth)

</script>

<style scoped lang="sass">
$sidebarWidth: v-bind(sidebarWidth)
$duration: .25s

.main-container
  width: calc(100% - $sidebarWidth)
  margin-left: $sidebarWidth
  transition: margin-left $duration

.sidebar
  position: fixed
  inset: 0 auto 0 0
  width: $sidebarWidth
  transition: width $duration
  :deep(.el-menu)
    width: 100% !important
  :deep(.el-sub-menu__title)
    padding-right: 0 !important

.navbar
  height: 50px

.app-main
  min-height: calc(100vh - 34px - 50px)
</style>
