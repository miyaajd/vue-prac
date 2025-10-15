<template>
  <div>
    <!-- header -->
    <Header 
    :isDark = "isDarkHeader"
    />
    <router-view></router-view>
    <Gotop />
  </div>
</template>

<script setup>
import { computed } from "vue";
import Gotop from "./components/Gotop.vue";
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";
const route = useRoute()
// isDark
const isDarkHeader = computed(()=>["Reser","Review"].includes(route.name))
</script>

<style scoped></style>
