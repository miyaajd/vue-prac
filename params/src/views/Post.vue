<template>
  <div class="card">
    <h2>Post Details</h2>
    <p>Content Num - {{ postId }}</p>
    <p>Title : {{ post.title }}</p>
    <p>Content  : {{ post.content }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.postId
const post = ref(null)
const dummyPosts = {
  101: { title: "Vue 시작하기", content: "Vue는 정말 쉬워요!" },
  202: { title: "Vue Router 배우기", content: "params는 유용해요!" },
};
post.value = dummyPosts[postId]
</script>

<style lang="scss" scoped>
@use "../assets/style/mixins" as *;
</style>
