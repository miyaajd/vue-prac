<template>
  <div>
    <h3>Product Details</h3>
    <p>name : {{ $route.params.name }}</p>
    <p>price : {{ $route.params.price }}</p>
    <button @click="goBack">↪ Back to Produts</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// useRoute() : 현재 페이지 정보 가져오는 기능
// useRouter() : 다른 페이지로 이동시키는 기능
const route = useRoute();
const router = useRouter();
//url - params
// const name = ref(route.params.name);
// const price = ref(route.params.price);

const goBack = () => {
  router.back(); //이전페이지로 이동(뒤로가기)
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 16px 0;
}
button {
  all: unset;
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 16px;
  background-color: rgb(0, 110, 255);
  color: #fff;
  margin-top: 8px;
}
</style>
