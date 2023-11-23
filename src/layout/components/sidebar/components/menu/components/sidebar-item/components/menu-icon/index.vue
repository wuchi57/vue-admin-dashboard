<template>
  <div v-if="icon" class="icon">
    <SvgIcon :name="icon" />
  </div>
</template>

<script setup>
import SvgIcon from 'components/svg-icon/index.vue'

defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="sass">
.svg-icon
  font-size: 18px
</style>
