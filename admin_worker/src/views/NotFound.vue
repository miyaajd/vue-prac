<template>
  <div class="home">
    <div class="notfound">
      <h2>⁕ 404 NOT FOUND</h2>
      <p>페이지를 찾을 수 없습니다.</p>
      <router-link to="/" class="toHome">홈으로 돌아가기</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notfound {
  text-align: left;
  h2 {
    font-size: 50px;
  }
  p {
    color: #777;
    font-size: 20px;
    font-weight: 500;
    padding: 80px 0 0;
  }
  .toHome {
    text-decoration: underline;
    font-weight: 500;
    // color: #777;
  }
}
</style>
