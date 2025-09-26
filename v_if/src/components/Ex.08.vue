<template>
  <div>
    <h2>모달</h2>
    <!-- 버튼 -->
    <button class="show" @click="showModal = true">Show Modal</button>
    <!-- 모달창 -->
    <div v-if="showModal" class="modal">
      <div class="modal-con">
        <h3>📢 NOTICE</h3>
        <p>정말로 진행하시겠습니까?</p>
        <button @click="showModal = false">⨉ Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<style scoped>
.show{
  padding: 8px 16px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-con {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 250px;
}
</style>
