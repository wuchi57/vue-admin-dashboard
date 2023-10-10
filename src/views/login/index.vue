<template>
  <h1>Login</h1>
  <el-button @click="handleLogin">点击登录</el-button>
</template>

<script setup>
import { User } from '@/api'

function handleLogin () {
  User.login({ username: 'admin', password: 'empty' }).then(res => {
    console.log('登录成功');
    console.log(res.data);
  })
}

</script>
