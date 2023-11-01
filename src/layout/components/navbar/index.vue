<template>
  <div class="navbar">
    <Hamburger :is-active="useAppStore().sidebar.opened" @toggle-click="useAppStore().toggleSidebar()" />
    <Breadcrumb />
    <LogoutButton />
  </div>
</template>

<script setup>
import LogoutButton from './components/logout-button'
import Hamburger from './components/hamburger'
import Breadcrumb from './components/breadcrumb'
import { useAppStore } from '@/store/index.js'

</script>

<style scoped lang="sass">
.navbar
  display: flex
  align-items: center
  justify-content: end
  padding-right: 20px
  box-shadow: 0 1px 4px rgba(0,21,41,.08)

.breadcrumb
  margin-right: auto
</style>
