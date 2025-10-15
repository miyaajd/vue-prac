<template>
  <div class="card" @click="clickCard">
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ price.toLocaleString() }} won</p>
  </div>
</template>

<script setup>
const props = defineProps(["image", "name", "price"]);
const emit = defineEmits(["selected"]);
const clickCard = () => {
  emit("selected", { name: props.name, price: props.price });
};
</script>

<style scoped>
.card {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}
.card img {
  width: 100%;
  border-radius: 6px;
}
</style>
