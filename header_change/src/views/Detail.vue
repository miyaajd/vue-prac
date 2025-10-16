<template>
  <div class="detail">
    <div class="product-container">
      <!-- img -->
      <div class="image-section">
        <img :src="selectedImg" :alt="product.name" class="main-image" />
        <!-- thumbnail -->
        <div class="thumbnails">
          <img
            v-for="(img, i) in product.images"
            :key="i"
            :src="img"
            @click="selectedImg = img"
            class="thumb"
          />
        </div>
      </div>
      <!-- dscr -->
      <div class="info-section">
        <h2>{{ product.name }}</h2>
        <p>Price : {{ product.price.toLocaleString() }}</p>
        <p>Dscr : {{ product.description }}</p>
        <div class="quantity">
          <button @click="chamgeQuantity(-1)"><span>-</span></button>
          <input v-model="quantity" />
          <button @click="chamgeQuantity(1)"><span>+</span></button>
        </div>
        <!-- total -->
        <p class="total-price">
          Total Price : {{ totalPrice.toLocaleString() }} won
        </p>
        <!--  -->
        <div class="buttons">
          <button class="like" @click="toggleLike">
            {{ liked ? "❤️ 찜하기 취소" : "🤍 찜하기" }}
          </button>
          <button class="buy" @click="showModal = true">Checkout</button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <div class="modal-overlay" v-if="showModal" @click="showModal = false">
    <div class="modal-content">
      <h2>Complete</h2>
      <p>{{ product.name }}, {{ quantity }} items</p>
      <p>Total Price : {{ totalPrice.toLocaleString() }} won</p>
      <div class="buttons2">
        <button class="like" @click="showModal = false">Cancle</button>
        <button class="buy" @click="confirmBtn">Confirm</button>
      </div>
    </div>
  </div>
  <!-- tab -->
   <Tab/>
</template>

<script setup>
import Tab from "@/components/Tab.vue";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    description: "A 상품 설명",
    image: "/images/product1.png",
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    description: "B 상품 설명",
    image: "/images/product2.png",
    images: [
      "/images/product2.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    description: "C 상품 설명",
    image: "/images/product3.png",
    images: [
      "/images/product3.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    description: "D 상품 설명",
    image: "/images/product4.png",
    images: [
      "/images/product4.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
    ],
  },
]);
// selected product
const product = computed(() => {
  return (
    products.value.find(
      (p) => p.id == route.params.id
      // console.log(p);
    ) || {}
  );
});
// selected img
const selectedImg = ref(product.value.images ? product.value.images[0] : "");
//
const quantity = ref(1);
//
const chamgeQuantity = (amount) => {
  if (quantity.value + amount > 0 && quantity.value + amount <= 5) {
    quantity.value += amount;
  }
};
// total price
const totalPrice = computed(() => {
  return product.value.price * quantity.value;
});
//
const liked = ref(false);
// toggle
const toggleLike = () => {
  liked.value = !liked.value;
};
// confirmBtn
const confirmBtn = () => {
  alert(`${product.value.name}, ${quantity.value} items`);
  router.push("/");
};
// modal
const showModal = ref(false);
</script>

<style lang="scss" scoped>
.detail {
  padding-top: 100px;
  text-align: center;
  .product-container {
    display: flex;
    gap: 50px;
    max-width: 800px;
    margin: auto;
    padding: 50px 20px;
    // background-color: antiquewhite;
    border: 1px solid #ddd;
    border-radius: 30px;
    box-shadow: 0 4px 10px #ddd;
    .image-section {
      flex: 1;
      //   background-color: #fff;

      .main-image {
        width: 100%;
        border-radius: 10px;
        filter: brightness(1.1);
        cursor: pointer;
      }
      .thumbnails {
        display: flex;
        justify-content: center;
        gap: 10px;
        .thumb {
          width: calc((100% - 30px) / 4);
          cursor: pointer;
        }
      }
    }
    .info-section {
      flex: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .quantity {
        display: flex;
        margin-top: 50px;
        button {
          width: 30px;
          height: 30px;
          font-size: 20px;
          cursor: pointer;
        }
        input {
          width: 50px;
          text-align: center;
          font-size: 16px;
        }
      }
      .total-price{
        font-weight: 500;
        margin: 30px 0;
        font-size: 20px;
      }
      .buttons {
        display: flex;
        gap: 10px;
        button {
          max-width: 100px;
          min-height: 30px;
          display: inline-block;
          line-height: 1;
          padding: 5px 16px;
          cursor: pointer;
        }
      }
    }
  }
}
// modal
.buttons2 {
  display: flex;
  gap: 5px;
  justify-content: center;
  button {
    cursor: pointer;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
  }
  .like {
    background-color: #dfdfdf;
  }
  .buy {
    background-color: #e63946;
    color: #fff;
  }
}
/* 모달창 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
