<template>
  <div>
    <button v-show="show" class="top" @click="goTop">↑</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// gotop status
const show = ref(false);
// scrolled check : show btn
const handleScroll = () => {
  show.value = window.scrollY > 200;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  background: #333;
  color: #fff;
  opacity: 0.8;
}
</style>
