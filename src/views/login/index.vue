<template>
  <h1>Login</h1>
  <el-button @click="handleLogin">点击登录</el-button>
</template>

<script setup>
import { useUserStore } from '@/store/index.js'
import router from '@/router/index.js'

function handleLogin() {
  const userStore = useUserStore()
  userStore.login({ username: 'admin', password: 'empty' }).then(() => {
    router.push({path: '/'})
  })
}
</script>
