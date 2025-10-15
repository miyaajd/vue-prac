<template>
  <div class="card">
    <img :src="img" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ dscr }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["img", "name", "dscr"]);
</script>

<style scoped>
.card {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}
.card img {
  width: 100%;
  border-radius: 6px;
}
</style>
