<template>
  <div class="contents">
    <Ex01 />
    <Ex02 />
    <Ex03 />
    <Ex04 />
    <Ex05 />
    <Ex06 />
    <Ex07 />
    <Ex08 />
  </div>
</template>

<script setup>
import Ex01 from "./components/Ex.01.vue";
import Ex02 from "./components/Ex.02.vue";
import Ex03 from "./components/Ex.03.vue";
import Ex04 from "./components/Ex.04.vue";
import Ex05 from "./components/Ex.05.vue";
import Ex06 from "./components/Ex.06.vue";
import Ex07 from "./components/Ex.07.vue";
import Ex08 from "./components/Ex.08.vue";
</script>

<style scoped>
.contents {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.contents div {
  background-color: #efefef;
  border-right: 1px solid #8888;
  /* margin: auto; */
}
</style>
