<template>
  <div class="sidebar">
    <Logo />
    <el-scrollbar>
      <Menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './components/logo'
import Menu from './components/menu'
</script>

<style scoped lang="sass">
.sidebar
  border-right: 1px solid red
</style>
