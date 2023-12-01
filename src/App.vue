<script setup lang="ts">
import NavSidebar from './components/NavSidebar.vue';
</script>

<template>
  <div class="app-container">
    <NavSidebar class="sidebar" />
    <router-view class="viewport"/>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.app-container {
  display: flex;
  flex-direction: row;
  height: 100vh; /* Fill the height of the viewport */
}
.sidebar {
  width: 20%;
}
.viewport {
  width: 80%;
}
</style>