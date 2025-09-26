<template>
  <div>
    <h2>버튼 색상 바꾸기</h2>
    <!-- v-bind = style -->
    <button
      :style="{
        backgroundColor: btnColor,
        color: btnColor2,
        padding: '8px 16px',
        borderRadius: '8px',
      }"
      @click="changeColor"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 버튼 변수
const btnColor = ref("blue");
const btnColor2 = ref("#fff");
const btnText = ref("클릭하세요");
// 버튼 클릭시 색 변경함수
const changeColor = () => {
  // console.log("click");
  const colors = ["#efefef", "#555", "#ccc", "pink", "#aaa"];
  //   btnColor.value = colors[3];
  //   console.log(colors[Math.floor(Math.random() * colors.length)]);
  //   console.log(colors.length);
  btnColor.value = colors[Math.floor(Math.random() * colors.length)];
};
</script>

<style scoped></style>
