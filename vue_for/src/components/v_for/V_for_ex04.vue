<template>
  <div>
    <h2>⭐반복출력</h2>
    <span v-for="n in 5" :key="n">⭐</span>
    <div class="stars">
      <h3>⭐ 반쪽 예제</h3>
      <!-- 꽉찬 별 네개  -->
      <span v-for="n in 4" :key="n" class="star full">★</span>
      <!-- 빈별 -->
       <span class="star half">★</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.star {
  font-size: 24px;
  color: lightgrey;
}
.full {
  color: gold;
}
.half{
    position: relative;
    display: inline-block;
    color: lightgrey;
}
.half::before{
    content: "★";
    position: absolute;
    color: gold;
    left: 0;
    width: 50%;
    overflow: hidden; /*절반칠하기*/
}
</style>
