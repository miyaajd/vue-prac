<template>
  <div>
  <h2>상품목록</h2>
  <div v-for="(i , index) in products" :key="index" class="product">
    <p>{{ i.name }} : {{ i.price.toLocaleString() }} won</p>
    <!-- v-if 솔드아웃 조건 -->
     <p v-if="i.soldOut" class="soldout">❌ Sold Out</p>
     <p v-else class="instock">✅ Available</p>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  { name: "아이스크림", price: 3000, soldOut: false },
  { name: "케이크", price: 15000, soldOut: true },
  { name: "콜라", price: 2000, soldOut: false },
]);
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 8px;
  margin: 6px;
  background-color: #fff;
  border-radius: 8px;
  /* width: 200px; */
}
.soldout {
  color: red;
  font-weight: bold;
}
.instock {
  color: green;
  font-weight: bold;
}
</style>
