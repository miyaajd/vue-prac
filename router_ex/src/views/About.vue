<template>
  <div class="about">
    <h2>About</h2>
    <p class="intro">About Page</p>
    <button class="btn">Click !</button>
    <button class="btn-d">Delete</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// root
$main-color: #d17878;
$hover-color: pink;
$font-color: #333;
// mixin
@mixin btn-style($bg, $color) {
  background-color: $bg;
  color: $color;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-right: 8px;
  &:hover {
    background-color:darken($bg , 10%);
  }
}
//
.about {
  padding: 20px;
  background-color: #f0f0f0;
  h2 {
    color: $main-color;
    margin-bottom: 15px;
  }
  .intro {
    color: $font-color;
    margin-bottom: 15px;
  }
  .btn {
    @include btn-style($main-color, white);
  }
  .btn-d {
    @include btn-style(white, $main-color);
  }
}
</style>
