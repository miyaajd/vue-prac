<template>
  <div>
    <h2>v_bind 시작</h2>
    <!-- HTML 속성에 변수 (데이터)를 연결해주는 도구 -->
    <!-- <img src="" alt=""> -->
    <img :src="img" alt="image" />
    <img :src="img2" alt="image" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const img = ref("https://picsum.photos/id/1020/200/150");
const img2 = ref("https://picsum.photos/id/1021/200/150");
</script>

<style scoped></style>
