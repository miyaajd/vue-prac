<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="이름 입력" />
      <input v-model="password" type="password" placeholder="비밀번호 입력" />
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const username = ref("");
const password = ref("");
const login = () => {
  const saved = localStorage.getItem("user");
  if (!saved) {
    alert("회원가입을 먼저 해주세요.");
    router.push("/signup")
    return;
  }
  const user = JSON.parse(saved);
  if (username.value === user.userName && password.value === user.password) {
    alert("로그인 성공 !");
    // 로그인 성공했을때 저장용(로그인 / 로그아웃 제어)
    localStorage.setItem("loggedInUser", username.value);
    router.push("/");
  }else{
    alert("아이디 또는 비밀번호가 일치하지 않습니다.")
  }
};
</script>

<style lang="scss" scoped></style>
