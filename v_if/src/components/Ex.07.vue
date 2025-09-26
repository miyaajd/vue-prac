<template>
  <div>
    <h2>재고관리</h2>
    <div class="product">
      <p>PRODUCT : ICE CREAM</p>
      <p>PRICE : 3,000 WON</p>
      <p>STOCK : {{ stock }}</p>
      <p v-if="stock === 0" class="soldout">❌ SOLD OUT</p>
      <p v-else class="instock">✅ AVAILABLE</p>
      <button @click="addToCart" :disabled="stock === 0">ADD TO CART</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 초기 재고 수량 3개
const stock = ref(3);
const addToCart = () => {
  if (stock.value > 0) {
    stock.value--;
  }
};
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
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
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
