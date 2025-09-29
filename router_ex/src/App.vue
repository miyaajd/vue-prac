<script setup></script>

<template>
  <div class="wrap"><h2>My site</h2>
  <!-- menu -->
   <nav>
    <!-- home
    about -->
    <router-link to="/">home</router-link> | 
    <router-link to="/about">about</router-link> | 
    <router-link to="/Login">Login</router-link>
   </nav>
   <!-- 페이지 보여주는곳 -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.wrap{
    max-width: 1200px;
    margin: 30px;
}
</style>
