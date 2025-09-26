<template>
  <div>
    <h2>상품 이미지</h2>
    <img :src="productImg" alt="product" /><br>
    <button @click="toggleImg">이미지 토글</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = [
  "https://picsum.photos/id/1022/200/150",
  "https://picsum.photos/id/1023/200/150",
];
const productImg = ref(images[0]);
const toggleImg = () => {
    // console.log("click");
    productImg.value = productImg.value === images[0] ? images[1] : images[0]
};
</script>

<style scoped></style>
