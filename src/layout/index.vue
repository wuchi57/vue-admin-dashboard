<template>
  <div class="app-wrapper" :class="{ isExpanded: useAppStore().sidebar.opened }">
    <Sidebar />
    <div class="container">
      <Navbar />
      <TagsView />
      <el-scrollbar>
        <Main />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Main from './components/main'
import TagsView from './components/tags-view'
import { useAppStore } from '@/store/index.js'

const sidebarWidthMin = '54px'
const sidebarWidthMax = '210px'
const sidebarWidth = computed(() => {
  return useAppStore().sidebar.opened ? sidebarWidthMax : sidebarWidthMin
})
provide('sidebarWidthMin', sidebarWidthMin)
provide('sidebarWidthMax', sidebarWidthMax)
provide('sidebarWidth', sidebarWidth)

</script>

<style scoped lang="sass">
$contentHeight: calc(100vh - 34px - 50px)
$sidebarWidth: v-bind(sidebarWidth)
$duration: .25s

.container
  width: calc(100% - $sidebarWidth)
  margin-left: $sidebarWidth
  transition: margin-left $duration

.sidebar
  position: fixed
  inset: 0 auto 0 0
  width: $sidebarWidth
  transition: width $duration

.navbar
  position: sticky
  top: 0
  height: 50px

.tags-view
  position: sticky
  top: 50px
  z-index: 9

.el-scrollbar
  height: $contentHeight

.main
  min-height: $contentHeight
</style>

<style lang="sass">
// el-menu缩小时的宽度默认为64px，调整一下
.sidebar
  .el-menu
    width: 100% !important
    .el-sub-menu__title
      padding-right: 0 !important
</style>
