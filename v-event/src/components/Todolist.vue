<template>
  <div class="todo-wrap">
    <!-- input -->
    <div class="input-group">
      <input type="text" v-model="newTodo" placeholder="new to do" />
      <button @click="addTodo">+</button>
    </div>
    <h5>🎧 ing</h5>
    <ul v-for="todo in todos" :key="todo.id">
      <li v-if="!todo.isComplete">
        <input type="checkbox" @change="toggleComplete(todo)" />
        {{ todo.name }}
      </li>
    </ul>
    <h5>🎀 done</h5>
    <ul v-for="(todo, index) in todos" :key="index">
      <li v-if="todo.isComplete">
        <span class="done">{{ todo.name }} </span
        ><button class="delete" @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const todos = ref([
  { id: 1, name: "Vue 공부하기", isComplete: false },
  { id: 2, name: "운동하기", isComplete: true },
  { id: 3, name: "책 읽기", isComplete: false },
]);
const newTodo = ref("");
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      name: newTodo.value,
      isComplete: false,
    });
    newTodo.value = "";
  } else {
    return alert(`add to do !`);
  }
};
const toggleComplete = (todo) => {
  todo.isComplete = !todo.isComplete;
};
const removeTodo = (index) => {
  todos.value.splice(index);
};
</script>

<style scoped>
input {
  padding: 5px 16px;
  border-radius: 5px;
  border: 1px solid #999;
}
button {
  all: unset;
  cursor: pointer;
  padding: 10px;
}
h5 {
  margin: 16px 0;
  color: rgb(230, 95, 117);
}
.done {
  color: #999;
  text-decoration: line-through;
}
.delete {
  color: rgb(84, 144, 255);
  font-size: 12px;
  font-weight: 500;
}
</style>
