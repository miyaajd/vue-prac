<template>
  <button
    @click="toggleDarkMode"
    class="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
    <span class="text-xl">{{ isDarkMode ? "🌙" : "☀️" }}</span>
  </button>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const isDarkMode = ref(false);

//마운트될때
onMounted(() => {
  const saveMode = localStorage.getItem("isDarkMode");
  if (saveMode !== null) {
    isDarkMode.value = saveMode === "true";
    updateDarkModeState();
  }
});

// 버튼 클릭시 다크모드 토글
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  updateDarkModeState();
  //   로컬스토리지에 저장
  localStorage.setItem("isDarkMode", isDarkMode.value);
};

// 색상변경
const updateDarkModeState = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// isDark 값 바뀔 때마다 ToDo 컴포넌트에 반영되도록 감시
watch(isDarkMode, (newVal) => {
  localStorage.setItem("isDarkMode", newVal);
});

</script>
