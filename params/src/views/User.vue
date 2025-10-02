<template>
  <div class="card">
    <h2>User Profile</h2>
    <p>User name : {{ username }}</p>
    <p class="about">{{ about }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const username = route.params.username;
const users = {
  kim: { bio: "안녕하세요! 저는 김씨에요 🧓🏿" },
  jin: { bio: "저는 여행을 좋아하는 jin이에요 🌍" },
  lee: { bio: "안녕하세요! 저는 이씨에요 🤴🏿" },
};
const about = users[username].bio;
</script>

<style lang="scss" scoped>
@use "../assets/style/mixins" as *;
.about {
  max-width: 280px;
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  margin: 10px 0;
  background-color: rgb(168, 201, 252);
}
</style>
