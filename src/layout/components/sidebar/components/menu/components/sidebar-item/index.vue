<template>
  <Link v-if="isShow && !isMenu" :to="resolvePath(currentItem.path)">
    <el-menu-item :index="resolvePath(currentItem.path)">
      <MenuIcon :icon="currentItem?.meta?.icon" />
      <template #title>
        <MenuTitle :title="currentItem?.meta?.title" />
      </template>
    </el-menu-item>
  </Link>

  <el-sub-menu v-if="isShow && isMenu" :index="resolvePath(item.path)">
    <template #title>
      <MenuIcon :icon="item?.meta?.icon" />
      <MenuTitle :title="item?.meta?.title" />
    </template>
    <SideBarItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="resolvePath(child.path)"
      :is-nested="true"
    />
  </el-sub-menu>
</template>

<script setup>
import SideBarItem from './index.vue'
import Link from './components/link'
import MenuIcon from './components/menu-icon'
import MenuTitle from './components/menu-title'
import { isExternal } from '@/utils/validate.js'
import { resolve } from 'path-browserify'

const props = defineProps({
  item: {
    type: Object,
  },
  basePath: {
    type: String,
    default: '',
  },
  isNested: {
    type: Boolean,
    default: false,
  },
})

const currentItem = ref()

// 根据 route 配置的 meta.hidden 决定是否显示路由
const isShow = ref(!Boolean(props.item.meta && props.item.meta.hidden))

const isMenu = computed(() => {
  return !isShowOne(props.item)
})

// 返回true显示项目，返回false显示目录
function isShowOne(parent) {
  // 获取所有显示的 route
  const children = parent.children || []
  const showingChildren = children.filter((item) => !(item.meta && item.meta.hidden))

  // 如果一个都没有，就默认显示 父级, path重置为空是因为resolvePath已默认包含basePath
  if (showingChildren.length === 0) {
    currentItem.value = { ...parent, path: '' }
    return true
  }

  // 只有一个显示的 children，就显示第一个, 问：如果单个item有children属性，如何显示？答：当menu显示
  if (showingChildren.length === 1) {
    currentItem.value = showingChildren[0]
    return !Boolean(currentItem.value.children)
  }

  return false
}

// 处理path
function resolvePath(path) {
  if (isExternal(path)) return path
  if (isExternal(props.basePath)) return props.basePath
  return resolve(props.basePath, path)
}
</script>
