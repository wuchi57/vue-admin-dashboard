<template>
  <el-button @click="handleExit">退出登录</el-button>
</template>

<script setup>
import { useUserStore } from '@/store/index.js'
import router from '@/router/index.js'

function handleExit() {
  const userStore = useUserStore()
  userStore.logout()
  router.push({ path: '/login' })
}
</script>

