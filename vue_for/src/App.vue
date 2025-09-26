<template>
  <div class="v_for">
    <!-- v_for -->
    <V_for />
  </div>
  <hr>
  <div class="v_bind">
    <!-- v_bind -->
    <V_bind />
  </div>
</template>

<script setup>
import V_bind from "./components/v_bind/V_bind.vue";
import V_for from "./components/v_for/V_for.vue";
</script>

<style scoped>
.v_for {
  width: 100%;
}
hr{
  margin: 80px 0;
}
</style>
