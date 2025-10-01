<template>
  <div>
    <h3>Products List</h3>
    <!-- list -->
    <ul>
      <li @click="goDetail('apple', '1,000')">🍎 Apple</li>
      <li @click="goDetail('banana', '2,000')">🍌 Banana</li>
      <li @click="goDetail('grape', '3,000')">🍇 Grape</li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goDetail = (name, price) => {
  router.push(`/products/${name}/${price}`);
};
</script>

<style scoped>
h3 {
  margin: 16px 0;
}
li {
  cursor: pointer;
  margin: 10px 0;
}
</style>
