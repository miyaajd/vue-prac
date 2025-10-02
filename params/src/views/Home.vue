<template>
  <div>
    <h2>Home</h2>
    <div class="container">
      <div class="section">
        <h3>Products Page</h3>
        <router-link to="/products/1" class="btn">veiw product 1</router-link>
        <br />
        <router-link to="/products/2" class="btn">veiw product 2</router-link>
      </div>
      <div class="section">
        <h3>User Page</h3>
        <router-link to="/user/kim" class="btn">🧓🏿 Kim's Profile</router-link>
        <br />
        <router-link to="/user/jin" class="btn">👩🏼‍🦳 Jin's Profile</router-link>
        <br />
        <router-link to="/user/lee" class="btn">🤴🏿 Lee's Profile</router-link>
      </div>
      <div class="section">
        <h3>Post Page</h3>
        <router-link to="/post/101" class="btn">view post 101</router-link>
        <br />
        <router-link to="/post/202" class="btn del">view post 202</router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/style/mixins" as *;
@use "../assets/style/variables" as *;

.container {
  display: flex;
  padding: 20px;
  gap: 20px;
  h3 {
    margin: 16px 0;
    color: $main-color;
    text-align: center;
  }
  .section{
    min-width: 250px;
    padding: 20px 50px;
    background-color: #fafafa;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
