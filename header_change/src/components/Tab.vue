<template>
  <div class="tab">
    <div class="tabs">
      <button @click="activeTab = 'detail'">Detail Info</button>
      <button @click="activeTab = 'review'">Review</button>
    </div>
    <!-- detail -->
    <div class="content" v-if="activeTab === 'detail'">detail</div>
    <!-- review -->
    <div class="content" v-if="activeTab === 'review'">review</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("detail");
</script>

<style lang="scss" scoped>
.tab {
  padding-top: 100px;
  text-align: center;
  button {
    max-width: 100px;
    min-height: 30px;
    display: inline-block;
    line-height: 1;
    padding: 5px 16px;
    cursor: pointer;
    margin-left: 10px;
  }
  .content{
    margin-top: 50px;
  }
}
</style>
