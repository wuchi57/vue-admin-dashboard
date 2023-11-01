<template>
  <div class="logo">
    <transition name="logo-transition">
      <router-link v-if="useAppStore().sidebar.opened" key="expand" class="link" to="/">
        <img v-if="dt.image" :src="dt.image" class="img" alt="logo" />
        <span>{{ dt.title }}</span>
      </router-link>
      <router-link v-else key="collapse" class="link" to="/">
        <img v-if="dt.image" :src="dt.image" class="img" alt="logo" />
        <span v-else>{{ dt.title }}</span>
      </router-link>
    </transition>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/index.js'

const dt = ref({
  image: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
  title: 'Vue Admin Template',
})
</script>

<style scoped lang="sass">
.logo
  border-bottom: 1px solid red
  height: 50px

.link
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  height: 100%

.img
  width: 32px
  height: 32px

.logo-transition-enter-active
  transition: opacity 1.5s

.logo-transition-enter,
.logo-transition-leave-to
  opacity: 0
</style>
