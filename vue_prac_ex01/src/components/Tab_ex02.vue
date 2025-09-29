<template>
  <div class="tab_box">
    <h2>Product Details</h2>
    <!-- btn -->
    <div class="tab_menu">
      <button @click="activeTab = 'info'">Product Info 🎇</button>
      <button @click="activeTab = 'review'">Review 🌐</button>
      <button @click="activeTab = 'delivery'">Delivery Info 🚚</button>
    </div>
    <!-- dscr -->
    <div v-if="activeTab === 'info'">
      <h3>Product Info 🎇</h3>
      <p>이 상품은 100% 천연 원료로 만들어젔습니다.</p>
    </div>
    <div v-if="activeTab === 'review'">
      <h3>Review 🌐</h3>
      <ul>
        <li>홍길동 : 정말 좋아요 👍</li>
        <li>김철수 : 배송 빨라요 🚀</li>
      </ul>
    </div>
    <div v-if="activeTab === 'delivery'">
      <h3>Delivery Info 🚚</h3>
      <p>배송: 2~3일 소요 ⏱</p>
      <p>환불: 상품 수령 후 7일 이내 가능 ✅</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref("info")
</script>

<style scoped>
.tab_box {
  max-width: 450px;
  background-color: #efefef;
  border: 1px solid #999;
  cursor: pointer;
  padding: 30px 16px;
  border-radius: 8px;
  text-align: center;
  height: auto;
}
button {
  margin: 16px 8px;
  padding: 5px 16px;
}
button:hover {
  background-color: #ddd;
}
</style>
