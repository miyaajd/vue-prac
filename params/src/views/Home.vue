<template>
  <div>
    <h2>Home</h2>
    <h3>Products Page</h3>
    <router-link to="/products/1">veiw product 1</router-link> <br>
    <router-link to="/products/2">veiw product 2</router-link>
    <h3>User Page</h3>
    <router-link to="/user/kim">🧓🏿 Kim's Profile</router-link> <br>
    <router-link to="/user/jin">👩🏼‍🦳 Jin's Profile</router-link> <br>
    <router-link to="/user/lee">🤴🏿 Lee's Profile</router-link>
    <h3>Post Page</h3>
    <router-link to="/post/101">view post 101</router-link> <br>
    <router-link to="/post/202">view post 202</router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
h3{
    margin: 16px 0;
}
</style>
