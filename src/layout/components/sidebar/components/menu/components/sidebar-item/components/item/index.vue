<template>
  <div>
    <SvgIcon v-if="icon" :name="icon" />
    <span>
      {{title}}
    </span>
  </div>
</template>

<script setup>
import SvgIcon from 'components/svg-icon'

defineProps({
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
.svg-icon
  margin-right: 10px
</style>
