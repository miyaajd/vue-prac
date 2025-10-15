<template>
  <header :class="[{ scrolled: isScrolled },{dark: isDark}]">
    <div class="inner">
      <img src="/images/link.png" alt="logo" class="logo" @click="goHome"/>
      <div class="hamburger">
        <div class="line" v-for="n in 3" :key="n"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// scroll status
const isScrolled = ref(false);
// if scrolled
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; //50px 이상 스크롤하면 true 로 변경
};
// onMounted (페이지 로딩되면 감시)
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
// goHome
const router = useRouter()
const goHome = ()=>{
  router.push("/")
}
// change header color
const props = defineProps({
  isDark : Boolean,

})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background-color: transparent;
  transition: all 0.3s ease;
  z-index: 10;
  //  if scrolled
  &.scrolled {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    img {
      filter: brightness(0) invert(1);
    }
  }
  // if isDark
  &.dark{
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    img {
      filter: brightness(0) invert(1);
    }
  }
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: auto;
    .hamburger {
      .line {
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 4px 0;
        border-radius: 3px;
        transition: all 0.3s ease;
      }
    }
    img{
      cursor: pointer;
    }
  }
}
</style>
