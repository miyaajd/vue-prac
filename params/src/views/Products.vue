<template>
  <div>
    <h2>Products Details</h2>
    <p>Product Num. {{ route.params.id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute() //현재페이지의 정보를 가져오는 기능
</script>

<style lang="scss" scoped></style>
