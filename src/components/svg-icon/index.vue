<template>
  <div
    v-if="isExternal(props.name)"
    :style="styleExternal"
    class="svg-icon svg-icon-external"
  />
  <svg v-else class="svg-icon" aria-hidden="true">
    <use :href="symbolId" :fill="fill" />
  </svg>
</template>

<script setup>
import { isExternal } from 'utils/validate.js'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  fill: {
    type: String,
    default: '#333',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const styleExternal = computed(() => {
  return {
    mask: `url(${props.name}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`
  }
})

</script>

<style lang="sass" scoped>
.svg-icon
  width: 1em
  height: 1em
  fill: currentColor
  /* icon高度16，文字高度22，默认向上对齐 */
  vertical-align: -0.15rem
  overflow: hidden

.svg-icon-external
  background-color: currentColor
  mask-size: cover !important
  display: inline-block
</style>
