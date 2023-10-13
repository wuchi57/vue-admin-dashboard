<template>
  <div class="app-wrapper">
    <Sidebar></Sidebar>
    <div class="main-container">
      <Navbar></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import AppMain from './components/app-main'
</script>

<style scoped lang="sass">
.sidebar
  position: fixed
  inset: 0 auto 0 0
  min-width: 210px

.main-container
  width: calc(100% - 210px)
  margin-left: 210px

.navbar
  height: 50px

.app-main
  min-height: calc(100vh - 50px)
</style>
