<template>
  <div class="home">
    <h2>Home</h2>
    <!-- btn -->
    <button class="btn" @click="toggleMessage">{{ message }}</button>
    <!-- card -->
    <div class="cards">
      <div class="card" v-for="(item, i) in products" :key="i">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
        <button class="card-btn">View More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const products = ref([
  { title: "🍎 사과", desc: "맛있고 건강한 사과입니다." },
  { title: "🍌 바나나", desc: "부드럽고 달콤한 바나나입니다." },
  { title: "🍇 포도", desc: "달콤한 포도 한 송이입니다." },
]);
const message = ref("Click !");
const isClick = ref(false);
const toggleMessage = () => {
  isClick.value = !isClick.value;
  message.value = isClick.value ? "Hi :-)" : "Click !";
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
@import "../assets/style/mixins";
.home {
  padding: 20px;
  background-color: #f0f0f0;
  h2 {
    color: $main-color;
  }
  .btn {
    @include btn-style($main-color, white);
  }
  .cards {
    display: flex;
    justify-content: space-between;
    .card-btn {
      @include btn-style(rgb(252, 224, 228), $main-color);
    }
  }
  .card {
    margin: 16px 0;
    width: 400px;
    @include card-style();
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
