<script setup>
import Reservation from "./components/Reservation.vue";
import Reservation_ex01 from "./components/Reservation_ex01.vue";
import Tab_ex from "./components/Tab_ex.vue";
import Tab_ex02 from "./components/Tab_ex02.vue";
</script>

<template>
  <Reservation />
  <hr />
  <div class="tab">
    <Tab_ex />
    <Tab_ex02 />
  </div>
  <hr>
  <div class="reser">
    <Reservation_ex01 />
  </div>
  <hr>
</template>

<style scoped>
hr {
  margin: 80px 0;
}
div {
  margin: 0 30px;
}
.tab{
  display: flex;
}
</style>
