<template>
  <div>
    <h3>Hi , {{ name }} !</h3>
    <p>Your Age : {{ age }}</p>
    <hr />
    <p>{{ shop }} Reservation in progress...</p>
    <button @click="onClick">Click !</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({ name: String, age: Number, shop: String });
const emit = defineEmits(["clicked"]);
const onClick = () => {
  emit("clicked" , "Hi : )");
};
</script>

<style lang="scss" scoped>
hr {
  margin: 30px 0;
}
</style>
