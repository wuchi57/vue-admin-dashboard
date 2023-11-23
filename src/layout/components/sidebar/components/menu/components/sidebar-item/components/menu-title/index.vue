<template>
  <span class="menu-title">{{ title }}</span>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="sass">
.menu-title
  margin-left: 10px
</style>
