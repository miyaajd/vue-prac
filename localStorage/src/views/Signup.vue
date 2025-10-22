<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input v-model="userName" type="text" placeholder="이름입력" />
      <input v-model="password" type="password" placeholder="비밀번호입력" />
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userName = ref("");
const password = ref("");
const signup = () => {
  const user = {
    userName: userName.value,
    password: password.value,
  };
  localStorage.setItem("user", JSON.stringify(user)); //회원정보저장
  alert("회원가입 완료");
  router.push("/login");
};
</script>

<style lang="scss" scoped></style>
