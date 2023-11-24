<template>
  <el-scrollbar style="height: 100%; margin-top: 50px;">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      :collapse="!useAppStore().sidebar.opened"
      :collapse-transition="false"
    >
      <SidebarItem
        v-for="route in router.options.routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SidebarItem from './components/sidebar-item'
import { useAppStore } from '@/store/index.js'
// import { Location, Document, Setting} from '@element-plus/icons-vue'

const router = useRouter()

const activeMenu = computed(() => {
  const { path } = useRoute()
  return path
})
</script>

<style scoped lang="sass">
.el-menu
  --el-menu-border-color: transparent
</style>

