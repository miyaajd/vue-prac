<template>
  <div class="bg-gray-100">
    <!--  responsive card -->
    <section class="p-6 max-w-6xl">
      <h2 class="text-3xl font-bold text-center mb-8 text-red-300">
        Product-Card
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
        <div
          v-for="(cat, index) in cats"
          :key="index"
          class="bg-white p-6 rounded-2xl shadow-md text-center"
        >
          <img
            :src="cat.img"
            :alt="cat.desc"
            class="rounded-lg mb-4 aspect-video"
          />
          <h4 class="mb-4">{{ cat.title }}</h4>
          <p class="mb-4">{{ cat.desc }}</p>
          <button
            class="bg-red-200 text-white font-bold px-6 py-1 rounded-lg cursor-pointer hover:bg-red-300"
          >
            View More
          </button>
        </div>
      </div>
      <img
        src="/public/images/kitty.png"
        alt="kitty"
        class="bg-red-100 cursor-pointer rounded-full shadow-md hover:scale-150 transition p-4 m-auto mt-8"
      />
    </section>
  </div>
</template>

<script setup>
const cats = [
  {
    img: "/public/images/cat1.webp",
    title: "귀여운 고양이",
    desc: "포근한 털이 매력적이에요 🐾",
  },
  {
    img: "/public/images/cat2.jpg",
    title: "졸린 고양이",
    desc: "자는 모습이 너무 귀여워요 😴",
  },
  {
    img: "/public/images/cat3.jpg",
    title: "활발한 고양이",
    desc: "장난꾸러기예요 🧶",
  },
];
</script>

<style lang="scss" scoped></style>
