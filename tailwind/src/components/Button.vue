<template>
  <div class="bg-gray-100 p-4">
    <section>
      <h2 class="text-3xl font-bold text-red-300 mb-6 text-center">
        Tailwind Button Effect 💡
      </h2>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <!-- narmal : bg-그라데이션 / hover-쉐도우 -->
        <button
          class="transition cursor-pointer bg-linear-to-r from-red-100 to-red-200 hover:shadow-md px-10 py-3 rounded-lg text-center text-white font-bold"
        >
          Normal
        </button>
        <!-- rounded : rounded-full / hover-changeBg -->
        <button
          class="cursor-pointer px-10 py-3 bg-red-300 rounded-full hover:bg-red-400 text-white font-bold transition"
        >
          Rounded
        </button>
        <!-- stroke : border / hover-scale -->
        <button
          class="cursor-pointer px-10 py-3 border-2 border-red-300 text-red-300 font-bold rounded-2xl hover:scale-103 transition"
        >
          Stroke
        </button>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
