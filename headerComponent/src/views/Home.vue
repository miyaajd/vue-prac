<template>
  <div class="homeWrap">
    <h2>Homepage</h2>
    <router-link to="/reser" class="btn">Go To Reservation</router-link>
    <router-link to="/review" class="btn">Go To Review</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.homeWrap {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin : 20px 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
