<template>
  <div class="card">
    <h3>Name : {{ name }}</h3>
    <p>Price : {{ price.toLocaleString() }} won</p>
  </div>
</template>

<script setup>
const props = defineProps(["name", "price"]);
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 10px auto;
  width: 300px;
  text-align: center;
  background: #f9f9f9;
}
.card:hover {
  background: #e8f0fe;
}
</style>
