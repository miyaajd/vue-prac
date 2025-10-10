<template>
  <div>
    <p>Name : {{ props.name }}</p>
    <p>Age : {{ props.age }}</p>
    <button @click="emit('clicked', 'Hi : )')">Click</button>
    <button @click="emit('cancle', 'Are You Cancle This ?')">Cancle</button>
    <button @click="emit('submit', 'Are You Submit This ?')">Submit</button>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";
const props = defineProps({
  name: String,
  age: Number,
});
const emit = defineEmits(["clicked", "cancle", "submit"]);
</script>

<style lang="scss" scoped></style>
