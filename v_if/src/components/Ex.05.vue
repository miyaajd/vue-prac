<template>
  <div>
    <h2>나이 선택</h2>
    <select v-model="age">
      <option value="0" disabled>나이를 선택하세요</option>
      <option value="5">5세</option>
      <option value="10">10세</option>
      <option value="15">15세</option>
      <option value="18">18세</option>
      <option value="20">20세</option>
      <option value="25">25세</option>
    </select>
    <!-- 조건에 따라 나이 표시 -->
     <p v-if="age >= 20">🍺 성인입니다</p>
     <p v-else-if="age >= 13">🍔 청소년입니다</p>
     <p v-else>🍦 어린이입니다</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const age = ref(0);
</script>

<style scoped></style>
