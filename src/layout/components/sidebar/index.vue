<template>
  <div class="sidebar">
    <Logo />
    <ul>
      <li>
        <router-link to="/">To Home</router-link>
      </li>
      <li>
        <router-link to="/about">To About</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Logo from './components/logo'
</script>

<style scoped lang="sass">
.sidebar
  border: 1px solid red
</style>
