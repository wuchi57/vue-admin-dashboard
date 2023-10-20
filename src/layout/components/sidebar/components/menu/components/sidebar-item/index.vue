<template>
  <div v-if="isShow">
    <el-menu-item v-if="isItem">
      <span>{{singleItem?.meta.title}}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template #title>{{item.meta.title}}</template>
      <SideBarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="child.path"
        :is-nested="true"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import SideBarItem from './index.vue'

const props = defineProps({
  item: {
    type: Object
  },
  basePath: {
    type: String
  },
  isNested: {
    type: Boolean,
    default: false
  }
})

// 根据 route 配置的 meta.hidden 决定是否显示路由
const isShow = ref(!Boolean(props.item.meta && props.item.meta.hidden))

// 条件：只有一个显示的子元素，或者一个都没有就默认显示父级
// 条件：显示子元素不能有children，或者设定不显示children
// 其他条件都话，就乖乖显示目录吧！
const singleItem = ref()
const isItem = computed(() => {
  return showItem(props.item.children, props.item) && (!singleItem.value?.children || singleItem.value?.noShowingChildren )
})

// 判断是否只有一个显示的 children，如果一个都没有，就默认显示 父级，返回true显示项目，返回false显示目录
function showItem (children = [], parent) {
  // 获取所有显示的 route
  const showingChildren = children.filter(item => !(item.meta && item.meta.hidden))

  if (showingChildren.length === 0) {
    singleItem.value = { ...parent, path: '', noShowingChildren: true}
    return true
  }

  if (showingChildren.length === 1) {
    singleItem.value = showingChildren[0]
    return true
  }

  return false
}
</script>

