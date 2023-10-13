<template>
  <h1>Home - {{username}}</h1>
</template>

<script setup>
import { User } from '@/api'

const username = ref()

function handleGetInfo() {
  User.getInfo('admin-token').then((res) => {
    console.log(res)
    username.value = res.data.name
  })
}

handleGetInfo()
</script>
