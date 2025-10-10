<template>
  <div>
    <Child
      :name="'dongmi'"
      :age="28"
      :shop="'<Ice Machine Care Service>'"
      @clicked="sayHi"
    />
    <hr />
    <MyCard
      :name="'Jin'"
      :age="27"
      @clicked="showMessage"
      @cancle="showMessage"
      @submit="showMessage"
    />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import MyCard from "./MyCard.vue";
const sayHi = (message) => {
  alert(message);
};
const showMessage = (message) => {
  alert(message);
};
</script>

<style lang="scss" scoped>
hr {
  margin: 30px 0;
}
</style>
