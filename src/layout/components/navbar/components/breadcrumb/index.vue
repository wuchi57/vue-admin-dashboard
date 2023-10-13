<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="item in list" :key="item">
      <span class="no-redirect">{{item}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>

const list = ref([
  'Hello',
  'World',
  'Next',
  'Time'
])

</script>

<style scoped lang="sass">
.breadcrumb
  margin-left: 8px

.no-redirect
  color: #97a8be
</style>

