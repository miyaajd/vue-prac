<template>
  <div class="box">
    <h3>짐보관 예약</h3>
    <input v-model="name" type="text" placeholder="이름을 입력하세요" />
    <button @click="saveName">✔ Save</button>
    <button @click="loadName">🧾 Load</button>
    <button @click="clearName">🗑 Clear</button>
    <p>Saved Name : {{ savedName }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const name = ref("");
// 저장된 이름
const savedName = ref("");
// 저장하기
const saveName = () => {
  localStorage.setItem("customerName", name.value);
  alert("Complete Saved Name");
  savedName.value = name.value;
};
// 불러오기
const loadName = () => {
  const getName = localStorage.getItem("customerName");
//   console.log(getName);
  savedName.value = getName ? getName : "None";
};
// 지우기
const clearName = () => {
  localStorage.removeItem("customerName");
  savedName.value = "";
  alert("Complete Clear Saved Name !");
};
// onMounted()
onMounted(() => {
  loadName();
});
</script>

<style lang="scss" scoped></style>
