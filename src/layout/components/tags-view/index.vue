<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="scrollbar-content">
        <router-link
          v-for="item in useTagsViewStore().visitedViews"
          :key="item.path"
          :to="{path: item.path, fullPath: item.fullPath}"
          class="scrollbar-item"
        >
          {{ item.title }}
          <IconEpClose
            v-if="disableCloseIcon.indexOf(item.path) === -1"
            @click.prevent.stop="handleClose(item)"
          />
        </router-link>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useTagsViewStore } from '@/store/index.js'

const { proxy } = getCurrentInstance()
const route = useRoute()
const router = useRouter()
const tagsViewStore = useTagsViewStore()
const disableCloseIcon = ['/dashboard']

function isCurrent (item) {
  return item.path === route.path
}
function handleClose(item) {
  proxy.$tabs.closeTab(item)
  if (isCurrent(item)) {
    toLastView()
  }
}

function toLastView () {
  let lastView = tagsViewStore.visitedViews.slice(-1)[0]
  if (lastView) {
    router.push(lastView.fullPath)
  }
}

// 初始化 tags 比如默认展示首页
function initTags () {
  let home = {
    path: '/dashboard',
    fullPath: '/dashboard',
    name: 'dashboard',
    meta: {title: 'Dashboard'},
  }
  tagsViewStore.addView(home)
}

// 使用watch而不用watchEffect可避免自动监控useTagsViewStore
watch(() => route.name, () => {
  tagsViewStore.addView(route)
})

onMounted(() => {
  initTags()
  tagsViewStore.addView(route)
})
</script>

<style scoped lang="sass">
.tags-view
  display: flex
  height: 34px
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04)

  :deep(.el-scrollbar .el-scrollbar__bar)
    height: 4px
    bottom: 0

  .scrollbar-content
    width: 100%
    display: flex

    .scrollbar-item
      display: flex
      align-items: center
      gap: 10px
      min-width: 80px
      font-size: 14px
      padding: 0 10px
      height: 26px
      line-height: 26px
      margin: 4px 10px
      flex-shrink: 0
      text-align: center
      cursor: pointer
      border: 1px solid #d8dce5
      color: #495060

    .scrollbar-item.router-link-active
      border-color: transparent
      color: white !important
      background: #409eff
</style>
