<template>
  <div class="container">
    <Event />
    <Form_ex />
  </div>

  <div class="container">
    <div>
      <h2>Array</h2>
      <button @click="showArr = !showArr">
        {{ showArr ? "Close" : "Show Ex" }}
      </button>
      <Arr_ex v-if="showArr" />
    </div>
    <div>
      <h2>To Do List</h2>
      <button @click="showTodo = !showTodo">
        {{ showTodo ? "Close" : "Show Todolist" }}
      </button>
      <!-- <Todolist v-if="showTodo" /> -->
      <Todolist />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Event from "./components/Event.vue";
import Form_ex from "./components/Form_ex.vue";
import Arr_ex from "./components/Arr_ex.vue";
import Todolist from "./components/Todolist.vue";
const showArr = ref(false);
const showTodo = ref(false);
</script>

<style scoped>
hr {
  margin: 80px;
}
.container {
  display: flex;
  gap: 10px;
}
.container div {
  padding: 30px;
  background-color: #efefef;
  border-radius: 10px;
  margin-bottom: 10px;
}
h2 {
  margin: 16px 0;
}
button {
  padding: 5px 16px;
}
</style>
