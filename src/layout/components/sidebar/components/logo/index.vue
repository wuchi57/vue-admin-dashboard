<template>
  <div class="logo">
    <transition name="logo-transition">

      <router-link v-if="useAppStore().sidebar.opened" key="expand" class="link" to="/">
        <img v-if="dt.image" :src="dt.image" class="img" alt="logo" />
        <span class="title">{{ dt.title }}</span>
      </router-link>

      <router-link v-else key="collapse" class="link collapse" to="/">
        <img v-if="dt.image" :src="dt.image" class="img" alt="logo" />
        <span v-else class="title">{{ dt.title }}</span>
      </router-link>

    </transition>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/index.js'
import img from '/public/vite.svg'

const dt = ref({
  image: img,
  title: 'Admin Template',
})

const sidebarWidthMin = inject('sidebarWidthMin')
const sidebarWidthMax = inject('sidebarWidthMax')
const sidebarWidth = inject('sidebarWidth')
</script>

<style scoped lang="sass">
.logo
  height: 50px
  width: v-bind(sidebarWidth)
  position: absolute
  z-index: 99
  transition: width .25s
  overflow: hidden

.link
  width: v-bind(sidebarWidthMax)
  display: flex
  align-items: center
  justify-content: center
  gap: 12px
  height: 100%
.link.collapse
  width: v-bind(sidebarWidthMin)

.img
  width: 32px
  height: 32px

.title
  white-space: nowrap
  overflow: hidden

.logo-transition-enter-active
  transition: opacity .25s

.logo-transition-enter,
.logo-transition-leave-to
  opacity: 0
</style>
