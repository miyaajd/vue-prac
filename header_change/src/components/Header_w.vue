<template>
  <header :class="[{ scrolled: isScrolled }, { dark: isDark }]">
    <div class="inner">
      <!-- <img src="/images/link.png" alt="logo" class="logo" @click="goHome" /> -->
      <img :src="currentLogo" alt="logo" class="logo" @click="goHome" />
      <div class="hamburger" @click="toggleSunMenu">
        <div class="line" v-for="n in 3" :key="n"></div>
      </div>
    </div>
    <!-- 서브메뉴 -->
    <SubMenu v-if="isSubMenuOpen" @close="isSubMenuOpen = false" />
  </header>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import SubMenu from "./SubMenu.vue";
// 스크롤 상태 저장
const isScrolled = ref(false);
// 서브 메뉴 상태 저장
const isSubMenuOpen = ref(false);
// 햄버거 클릭시 서브메뉴 나타나기
const toggleSunMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};
// 스크롤 하면 색 변경
const handelScroll = () => {
  isScrolled.value = window.scrollY > 50; // 50px 이상 스크롤 하면 ture
};
const router = useRouter();
const route = useRoute();
// 로고 클릭시 home이동
const goHome = () => {
  router.push("/");
};
// 페이지 켜질때 감시 시작
onMounted(() => {
  window.addEventListener("scroll", handelScroll);
});
// 부모(App.vue)에서 받은 값
const props = defineProps({
  isDark: Boolean,
  logoSrc: {
    tyle: String,
    default: "/images/link.png",
  },
});
// 현재 표시할 로고 이미지 계산
const currentLogo = computed(() => {
  // 스크롤 상태 우선
  if (isScrolled.value) {
    return "/images/favicon_192.png";
  }
  // 페이지별 변경
  if (["ReserVue", "ReviewVue"].includes(route.name)) {
    return "/images/favicon_192.png";
  }
  // 기본 로고
  return props.logoSrc;
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 10;
  // 스크롤하면
  &.scrolled {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    // img {
    //  filter: brightness(0) invert(1);
    //}
  }
  //   dark 더해지면
  &.dark {
    background-color: #333;
    .line {
      background-color: #fff !important;
    }
    // img{
    //  filter: brightness(0) invert(1);
    //}
  }
  .inner {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    .logo {
      width: 50px;
      cursor: pointer;
    }

    .hamburger {
      .line {
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 4px 0;
        border-radius: 2px;
        transition: all 0.3s;
      }
    }
  }
}
</style>
