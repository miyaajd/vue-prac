<template>
    <div>
        <h2>이미지 보이기 / 숨기기</h2>
        <img v-if="showImg" src="https://picsum.photos/id/1025/200/150" alt="image"><br>
        <button @click="showImg = !showImg">이미지 {{ showImg ? "숨기기" : "보이기" }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showImg = ref(true)
</script>

<style scoped>

</style>