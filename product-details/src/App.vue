<script setup></script>

<template>
  <div class="wrap">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/reser">Reser</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.wrap {
  max-width: 1000px;
  margin: auto;
}
</style>
