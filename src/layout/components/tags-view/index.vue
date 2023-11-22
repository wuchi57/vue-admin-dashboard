<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="scrollbar-content">
        <p
          v-for="item in useTagsViewStore().visitedViews"
          :key="item.path"
          class="scrollbar-item"
        >
          {{ item.title }}
        </p>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useTagsViewStore } from '@/store/index.js'

const route = useRoute()

watchEffect(() => {
  if (route.name) {
    useTagsViewStore().addView(route)
  }
})

onMounted(() => {
  useTagsViewStore().addView(route)
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
      width: 100px
      height: 26px
      line-height: 26px
      margin: 4px 10px
      flex-shrink: 0
      text-align: center
      cursor: pointer
      border: 1px solid #d8dce5
      color: #495060
</style>
