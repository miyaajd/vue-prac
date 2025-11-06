<template>
  <div class="text-center">
    <!-- 오류 -->
    <div class="text-red-600" v-if="error">{{ error }}</div>
    <div
      class="flex flex-col items-center text-gray-900 dark:text-white text-sm"
      v-else-if="weather"
    >
      <!-- 이미지 -->
      <img
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        :alt="weather.weather[0].description"
        class="w-12 h-12"
      />
      <!-- 온도 -->
      <p>{{ weather.name }}</p>
      <p class="font-bold">{{ weather.main.temp.toFixed(1) }}°C</p>
      <p>{{ weather.weather[0].description }}</p>
    </div>
    <!-- 로딩 표시 -->
    <div v-else class="text-gray-900 dark:text-white">날씨 불러오는 중</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// 날씨 API 연동
const error = ref("");
const city = "Daegu";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const weather = ref(null);
const getWeather = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(data.message || "날씨 데이터를 가져올 수 없습니다.");
    }
    const data = await res.json();
    weather.value = data;
    console.log(weather.value);
  } catch (err) {
    error.value = `오류 : ${err.message}`;
  }
};

// 마운트될 때 실행
onMounted(() => {
  getWeather();
});
</script>

<style lang="scss" scoped></style>
