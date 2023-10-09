<template>
<div>Login</div>
</template>

<script setup>
import Table from '@/api/table.js'
import { useUserStore } from 'store'

Table.getList({})
const userStore = useUserStore()

userStore.login({ username: 'oo', password: 'abc'})

</script>

