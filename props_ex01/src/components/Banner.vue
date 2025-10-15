<template>
  <div class="banner" :style="{ backgroundImage: `url(${bg})` }">
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps(["title", "bg"]);
</script>

<style scoped>
.banner {
  height: 200px;
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
