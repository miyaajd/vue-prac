<template>
  <div class="home">
    <h2>Product List</h2>
    <!-- list -->
    <ul class="product-list">
      <li
        v-for="(item, i) in products"
        :key="i"
        @click="viewProductDetails(item)"
        class="card"
      >
        <h4>{{ item.name }}</h4>
        <img :src="item.image" :alt="item.name" />
        <p>{{ item.description }}</p>
        <p>{{ item.price }}</p>
        <button class="button primary">View More</button>
      </li>
    </ul>
  </div>
  <!-- product details modal -->
  <div v-if="showProductModal" class="modal-overlay" @click="closeModal()">
    <div class="modal">
      <h4>{{ selectedProduct.name }}</h4>
      <img :src="selectedProduct.image" :alt="selectedProduct.name" />
      <p>{{ selectedProduct.description }}</p>
      <p>{{ selectedProduct.price }}</p>
    </div>
  </div>
</template>

<script setup>
// 제품 목록 데이터
import { ref } from "vue";
const products = ref([
  {
    name: "제품 A",
    image: "/public/images/product1.png",
    description: "이 제품은 매우 우수한 품질을 자랑합니다.",
    price: "100,000",
  },
  {
    name: "제품 B",
    image: "/public/images/product2.png",
    description: "이 제품은 혁신적인 기능을 가지고 있습니다.",
    price: "150,000",
  },
  {
    name: "제품 C",
    image: "/public/images/product3.png",
    description: "이 제품은 고급스러운 디자인을 자랑합니다.",
    price: "200,000",
  },
]);

// click => details
const viewProductDetails = (item) => {
  // console.log(item);
  showProductModal.value = true;
  selectedProduct.value = item;
};
// modal status & selected
const showProductModal = ref(false);
const selectedProduct = ref(null);
const closeModal = () => {
  showProductModal.value = false;
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 20px 0;
  h2 {
    margin: 16px 0;
  }
  .product-list {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    .card {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      &:hover {
        transform: scale(1.05);
      }
      img {
        width: 100%;
      }
      h4 {
        font-size: 1.2rem;
        margin: 10px 0;
      }

      p {
        font-size: 1rem;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
