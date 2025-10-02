<script setup>
import Home from './views/Home.vue';

</script>

<template>
  <div>
    <router-link to="/">Home</router-link>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
