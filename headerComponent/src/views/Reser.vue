<template>
  <div class="reserWrap">
    <h2>Reservation</h2>
    <router-link to="/" class="btn">↪ Home</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.reserWrap {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin: 20px 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
