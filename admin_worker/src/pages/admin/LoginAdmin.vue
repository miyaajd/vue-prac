<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-8">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-center text-2xl font-bold text-gray-800 mb-8">로그인</h2>
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >이메일</label
          >
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요."
            repuired
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div class="relative space-y-2">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >비밀번호</label
          >

          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="비밀번호를 입력하세요."
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="button" @click="togglePassword" class="cursor-pointer absolute right-3 top-1/2">
            {{ showPassword ? "숨기기" : "보기" }}
          </button>
        </div>
        <button
          type="submit"
          class="cursor-pointer w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const showPassword = ref(false)
const password = ref("")
const togglePassword = ()=>{
  showPassword.value = !showPassword.value
}
const handleLogin = ()=>{
  router.push("admin/dashboard")
}
</script>

<style scoped></style>
