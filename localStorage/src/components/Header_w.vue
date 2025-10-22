<template>
  <div>
    <router-link to="/">LOGO</router-link> |
    <router-link to="/reserve">예약하기</router-link> |
    <router-link to="/confirm">예약확인</router-link> |
    <!-- 로그인 상태에 따라서 메뉴 변경 -->
    <span v-if="loggedInUser"
      ><b>{{ loggedInUser }}</b> 님
      <button @click="logout">로그아웃</button></span
    >
    <!-- 기본메뉴 -->
    <span v-else
      ><router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link></span
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loggedInUser = ref(null);
// 로그인 상태체크
const checkLogin = () => {
  const user = localStorage.getItem("loggedInUser");
  loggedInUser.value = user ? user : null;
};
// 페이지 열릴때 한번 실행
onMounted(() => {
  checkLogin();
});
// 로그아웃
const logout = () => {
  localStorage.removeItem("loggedInUser");
  alert("로그아웃 되었습니다.");
};
</script>

<style lang="scss" scoped></style>
