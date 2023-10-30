<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
const route = useRoute()
const key = computed(() => {
  return route.path
})
</script>

<style scoped lang="sass">
.main
  padding: 20px

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active
  transition: all .5s

.fade-transform-enter
  opacity: 0
  transform: translateX(-30px)

.fade-transform-leave-to
  opacity: 0
  transform: translateX(30px)

</style>
