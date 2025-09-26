<template>
  <h1>V_for</h1>
  <div class="section">
    <V_for_ex01 />
    <V_for_ex02 />
    <V_for_ex03 />
    <V_for_ex04 />
  </div>
  <hr>
  <div class="slide">
    <h1>V_for_slide</h1>
    <V_for_ex05 />
  </div>
  <hr>
  <div class="notice-gallery">
    <h1>V_for_notice_gallery</h1>
    <V_for_ex06 />
  </div>
</template>

<script setup>
import V_for_ex01 from "./V_for_ex01.vue";
import V_for_ex02 from "./V_for_ex02.vue";
import V_for_ex03 from "./V_for_ex03.vue";
import V_for_ex04 from "./V_for_ex04.vue";
import V_for_ex05 from "./V_for_ex05.vue";
import V_for_ex06 from "./V_for_ex06.vue";
</script>

<style scoped>
.section {
  display: flex;
}
.section > div {
  flex: 1;
}
hr{
  margin: 50px 0;
}
</style>
