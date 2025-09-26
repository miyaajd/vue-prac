<template>
  <div>
    <h2>링크 변경</h2>
    <a :href="linkUrl" target="_blank">VISIT NAVER</a><br> 
    <button @click="changeLink">VISIT DAUM</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const linkUrl = ref("https://www.naver.com");
const changeLink = () => {
    // visit daum 버튼 클릭하고 visit naver 링크 클릭시 주소가 다음주소로 바뀜
  linkUrl.value = "https://www.daum.net";
};
</script>

<style scoped></style>
