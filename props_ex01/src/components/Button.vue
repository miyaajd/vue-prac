<template>
  <button class="btn" :style="{ backgroundColor: color }">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps(["label", "color"]);
</script>

<style scoped>
.btn {
  color: #fff;
  border: none;
  background-color: rgb(54, 162, 250);
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 6px;
  transition: 0.3s;
}
.btn:hover {
  opacity: 0.8;
}
</style>
