<template>
  <div class="hamburger" @click="handleClick">
    <SvgIcon class="icon" :class="{ 'is-active': isActive }" name="hamburger"></SvgIcon>
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['toggleClick'])

function handleClick () {
  emits('toggleClick')
}

</script>

<style scoped lang="sass">
.hamburger
  display: grid
  place-items: center
  height: 100%
  padding: 0 15px
  cursor: pointer
  transition: background .3s

  &:hover
    background: rgba(0, 0, 0, .025)

.icon
  width: 20px
  height: 20px

.icon.is-active
  transform: rotate(180deg)
</style>

