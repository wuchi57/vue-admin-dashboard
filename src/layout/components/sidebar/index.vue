<template>
  <div class="sidebar">
    <Logo />
    <el-scrollbar>
      <Menu />
    </el-scrollbar>

<!--    <ul>-->
<!--      <li>-->
<!--        <router-link to="/">To Home</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/about">To About</router-link>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script setup>
import Logo from './components/logo'
import Menu from './components/menu'
</script>

<style scoped lang="sass">
.sidebar
  border: 1px solid red
</style>
