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
  height: 100%; /* Fill the height of the viewport */
}

.sidebar {
  width: 20%;
  height: auto;
  box-sizing: border-box;
}
.viewport {
  width: 80%;
  box-sizing: border-box;
}

@media (max-width: 650px) {
  .app-container {
    flex-direction: column;
  }
  .sidebar {
    height: 15%;
    width: 100%;
  }
  .viewport {
    height: 85%;
    width: 100%;
  }
}
</style>