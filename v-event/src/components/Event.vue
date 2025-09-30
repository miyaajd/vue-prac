<template>
  <div>
    <h2>Click Event</h2>
    <button @click="sayHello">click !</button>
    <p>{{ message }}</p>
    <h2>mouse event</h2>
    <button
      @mouseover="color = 'gray'"
      @mouseout="color = 'white'"
      :style="{ backgroundColor: color }"
    >
      mouseover
    </button>
    <h2>input event</h2>
    <input type="text" placeholder="name" @input="updateName" />
    <p>
      My name is <span>{{ name }}</span>
    </p>
    <h2>form event</h2>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="E-mail" v-model="email" />
      <button type="submit">submit</button>
    </form>
    <p>
      E-mail : <span>{{ email }}</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("not click");
const isHello = ref(false); //save status
const sayHello = () => {
  // message.value = "Hello"
  //  how to toggle
  isHello.value = !isHello.value;
  message.value = isHello.value ? "Hello" : "not click";
};
// save color
const color = ref("white");
// input event
const name = ref("");
const updateName = (e) => {
  name.value = e.target.value;
};
// form event
const email = ref("");
const handleSubmit = () => {
  alert(`complete submit ! Your email : ${email.value}`);
};
</script>

<style scoped>
button {
  padding: 5px 16px;
}
input {
  padding: 5px 16px;
}
span {
  text-decoration: underline;
  font-weight: 600;
  color: #555;
}
h2 {
  margin: 18px 0;
}
</style>
