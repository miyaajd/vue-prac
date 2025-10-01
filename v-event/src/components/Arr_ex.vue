<template>
  <div>
    <h2>Control arr ex</h2>
    <p>current arr : {{ items }}</p>
    <div class="btn-wrap">
      <button @click="addItem">push() - add</button>
      <button @click="removeLastItem">pop() - remove last item</button>
      <button @click="removeFirstItem">shift() - remove first item</button>
      <button @click="addFirstItem">unshift() - add first item</button>
      <button @click="changeItem">splice() - changeItem</button>
      <button @click="sortItems">sort()</button>
      <button @click="reverseItem">reverse()</button>
      <button @click="filterItems">filter() - filtering contain "a" el</button>
      <button @click="concatItems">concat() - concat new arr</button>
      <button @click="sliceItems">slice()</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const items = ref(["Apple", "Banana", "Cherry", "Orange", "Grapes"]);
const addItem = () => {
  items.value.push("Pineapple");
};
const removeLastItem = () => {
  items.value.pop(); //remove last item
};
const removeFirstItem = () => {
  items.value.shift(); // remove first item
};
const addFirstItem = () => {
  items.value.unshift("Peach"); // add first item
};
const changeItem = () => {
  items.value.splice(1, 1, "Kiwi"); //splice(index num , delete count , "add item")
};
const sortItems = () => {
  items.value.sort();
};
const reverseItem = () => {
  items.value.reverse();
};
const filterItems = () => {
  items.value = items.value.filter((item) => {
    // console.log(item);
    return item.includes("a");
  });
};
const concatItems = () => {
  items.value = items.value.concat(["Mango", "Strawberry", "Lemon", "Avocado"]);
};
const sliceItems = () => {
  items.value = items.value.slice(1,3) // (start slice, end slice)
};
</script>

<style lang="scss" scoped>
p {
  margin: 10px 0;
}
button {
  padding: 5px 16px;
  margin: 8px 8px 0 0;
}
</style>
