<template>
  <div class="home">
    <h1>🏠 {{ $t("home.title") }}</h1>
    <router-link to="/reser" class="btn">{{ $t("home.goReserve") }}</router-link>
    <router-link to="/review" class="btn">{{ $t("home.goReview") }}</router-link>
    <!-- list -->
    <!-- <div class="product-wrap"> -->
      <!-- <h2>Product-List</h2> -->
      <!-- <div class="product-list"> -->
        <!-- v-for 돌렸을때 특정 nth-child 만 스타일지정하는법 -->
        <!-- <div
          class="product"
          v-for="(product, id) in products"
          :key="product.id"
          :class="{ second: (i + 1) % 2 === 0 }"
        > -->
          <!-- <img :src="product.image" :alt="product.name" @click="goDetail(product.id)" /> -->
          <!-- <p>Product Name : {{ product.name }}</p> -->
          <!-- <p>Price : {{ product.price.toLocaleString() }} won</p> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    image: "/images/product2.png",
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    image: "/images/product3.png",
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    image: "/images/product4.png",
  },
]);
// go Detail
const router = useRouter()
const goDetail = (id) => {
  console.log(id);
  router.push(`/detail/${id}`)
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
  .product-list {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .product {
    cursor: pointer;
    &.second {
      background-color: #999;
    }
  }
}
</style>
