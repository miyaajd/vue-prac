<template>
    <div>
        <h2>v-if 란</h2>
        <!-- 조건 -->
         <p v-if="isLogin">✅ 로그인 했어요!</p>
         <p v-else>❌ 아직 로그인 안했어요!</p>
         <!-- 버튼으로 값 변경 -->
          <button @click="isLogin = !isLogin">로그인 / 로그아웃</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLogin = ref(true)
</script>

<style scoped>

</style>