<template>
    <div>
        <h2>아이디 입력 검사</h2>
        <input type="text" placeholder="아이디를 입력하세요">
        <!-- 경고문구 -->
         <p v-if="userId === ''" class="error">❌ 아이디를 꼭 입력하세요 !</p>
         <p v-else>✅ 아이디가 입력되었습니다 !</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userId = ref("")

</script>

<style scoped>
.error{
    color: red;
    font-weight: 500;
}
</style>