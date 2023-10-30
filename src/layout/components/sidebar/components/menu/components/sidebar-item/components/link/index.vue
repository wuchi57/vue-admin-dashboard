<template>
  <component :is="isExternalLink ? 'a' : 'router-link'" v-bind="linkProps">
    <slot />
  </component>
</template>

<script setup>
import { isExternal } from '@/utils/validate.js'

const props = defineProps({
  to: {
    type: String,
  },
})

const isExternalLink = computed(() => {
  return isExternal(props.to)
})

const linkProps = computed(() => {
  return isExternal(props.to)
    ? {
        href: props.to,
        target: '_blank',
        rel: 'noopener',
      }
    : {
        to: props.to,
      }
})
</script>

<style scoped lang="sass"></style>
