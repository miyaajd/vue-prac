<template>
  <div>
    <h2>상품 목록</h2>
    <div v-for="(p , index) in products">
        <p>{{index + 1}} {{p.name}} - {{p.price.toLocaleString()}} won</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const products = ref([
  { name: "피자", price: 12000 },
  { name: "햄버거", price: 8000 },
  { name: "콜라", price: 2000 },
]);
</script>
<style scoped></style>
