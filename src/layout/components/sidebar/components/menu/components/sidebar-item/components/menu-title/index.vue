<template>
  <span>{{ title }}</span>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
