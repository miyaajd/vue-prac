<template>
  <div class="info_card">
    <h3>{{name}}</h3>
    <p>Age : {{age}}</p> 
    <p>Major :{{major}}</p>
  </div>
</template>

<script setup>
const props = defineProps(["name", "age", "major"]);
</script>

<style scoped>
.info_card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 10px auto;
  width: 300px;
  text-align: center;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.info_card:hover {
  background: #e8f0fe;
}
</style>
