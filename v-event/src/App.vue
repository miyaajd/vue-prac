<script setup>
import Event from "./components/Event.vue";
import Form_ex from "./components/Form_ex.vue";
</script>

<template>
  <div class="container">
    <Event />
    <Form_ex />
  </div>
</template>

<style scoped>
hr {
  margin: 80px 0;
}
.container{
  display: flex;
  gap: 10px;
}
.container div{
  padding: 30px;
  background-color: #efefef;
  border-radius: 10px;
}
</style>
