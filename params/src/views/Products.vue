<template>
  <div class="card">
    <h2>Products Details</h2>
    <p>Product Num. {{ id }}</p>
    <h3>Product Info</h3>
    <p>name : {{ productName }}</p>
    <p>price : {{ productPrice.toLocaleString() }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute(); //현재페이지의 정보를 가져오는 기능
const id = route.params.id;

const products = {
  1: { name: "노트북", price: 1500000 },
  2: { name: "헤드폰", price: 200000 },
};
const productName = products[id].name;
const productPrice = products[id].price;
</script>

<style lang="scss" scoped>
@use "../assets/style/mixins" as *;
</style>
