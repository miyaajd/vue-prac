<template>
  <div>
    <h2>간단한 반복문</h2>
    <ul>
      <li v-for="(fruit, index) in fruits">🍓 {{ index + 1 }} &nbsp;&nbsp; {{ fruit }}</li>
    </ul>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="(p, index) in products">⁕ {{ index + 1 }} &nbsp;&nbsp; {{ p }}</li>
    </ul>
    <h2>글 목록</h2>
    <ul>
        <li v-for="(post , index) in posts">{{ index + 1 }} &nbsp;&nbsp; {{ post }}</li>
    </ul>
    <h2>메뉴</h2>
    <ul>
        <li v-for="(menu , index) in menus">{{ index + 1 }} &nbsp;&nbsp; {{ menu }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const fruits = ref(["apple", "banana", "grape", "strawberry"]);
const products = ref(["pizza", "hamburger", "cola"]);
const posts = ref(["첫 번째 글", "두 번째 글", "세 번째 글"]);
const menus = ref(["홈", "상품", "문의", "로그인"]);
</script>

<style scoped></style>
