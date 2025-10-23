<template>
  <div>
    <router-link to="/">LOGO</router-link> |
    <router-link to="/reserve">예약하기</router-link> |
    <router-link to="/confirm">예약확인</router-link> |
    <router-link to="/review">리뷰</router-link> |
    <!-- 로그인 상태에 따라서 메뉴 변경 -->
    <span v-if="loggedInUser"
      ><b>{{ loggedInUser }}</b> 님
      <button @click="logout">로그아웃</button></span
    >
    <!-- 기본메뉴 -->
    <span v-else
      ><router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입 </router-link></span
    >
    <!-- 다크모드 버튽 -->
    <button class="theme-btn" @click="toggleTheme">
      {{ isDark ? "🌙 다크모드" : "☀️ 라이트모드" }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

// 다크모드 설정
const isDark = ref(false);
const THEME_KEY = "theme";

const loggedInUser = ref(null);
// 로그인 상태체크
const checkLogin = () => {
  const user = localStorage.getItem("loggedInUser");
  loggedInUser.value = user ? user : null;
};
// 페이지 열릴때 한번 실행
onMounted(() => {
  checkLogin();
  // 다크모드 설정
  // 로컬에서 테마 불러오기
  const savedTheme = localStorage.getItem(THEME_KEY);
  isDark.value = savedTheme === "dark";
});
// 다크모드 적용
watch(
  isDark,
  (val) => {
    const el = document.documentElement; //el = document전체
    if (val) {
      el.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  },
  { immediate: true }
);
// 토글테마
const toggleTheme = () => {
  isDark.value = !isDark.value;
};
// 로그아웃
const logout = () => {
  localStorage.removeItem("loggedInUser");
  loggedInUser.value = null;
  alert("로그아웃 되었습니다.");
};
</script>

<style lang="scss" scoped></style>
