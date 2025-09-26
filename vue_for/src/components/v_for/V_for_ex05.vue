<template>
  <section class="visual">
    <swiper
      class="visulSwiper"
      :modules="[Autoplay, Pagination, Navigation]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :loop="true">
      <swiper-slide>
        <img src="https://picsum.photos/id/1011/1200/400" alt="slide" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/id/1012/1200/400" alt="slide" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/id/1013/1200/400" alt="slide" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

</script>
<style scoped>
.visual img {
  width: 100%;
  display: block;
}
</style>
