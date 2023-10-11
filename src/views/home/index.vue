<template>
  <h1>Home</h1>
  <router-link to="/about">To About</router-link>
  <hr />
  <el-button @click="handleExit">退出登录</el-button>
  <el-button @click="handleGetInfo">获取用户信息</el-button>
</template>

<script setup>
import { useUserStore } from '@/store/index.js'
import router from '@/router/index.js'
import { User } from '@/api'

function handleExit() {
  const userStore = useUserStore()
  userStore.logout()
  router.push({ path: '/login' })
}

function handleGetInfo() {
  User.getInfo('admin-token').then((res) => {
    console.log(res)
  })
}
</script>
