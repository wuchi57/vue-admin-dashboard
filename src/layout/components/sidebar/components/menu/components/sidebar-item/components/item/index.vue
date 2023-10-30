<template>
  <div>
    {{title}}
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="sass">

</style>
