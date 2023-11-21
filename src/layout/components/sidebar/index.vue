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
  box-shadow: 2px 0 6px rgba(0,21,41,.35)
</style>
