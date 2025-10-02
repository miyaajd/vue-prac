<template>
  <div>
    <h2>User Profile</h2>
    <p>User name : {{ route.params.username }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped></style>
