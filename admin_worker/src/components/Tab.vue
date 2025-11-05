<template>
  <div class="tab">
    <div class="tabs">
      <button
        @click="activeTab = 'detail'"
        :class="{ active: activeTab === 'detail' }"
      >
        Detail Info
      </button>
      <button
        @click="activeTab = 'review'"
        :class="{ active: activeTab === 'review' }"
      >
        Review
      </button>
    </div>
    <!-- detail -->
    <div class="content" v-if="activeTab === 'detail'">
      <h3>Product Details</h3>
      <p>
        이 이어폰은 최상의 음질을 제공하며, 무선으로 편리하게 사용할 수
        있습니다.
      </p>
      <ul>
        <li>✔ 블루투스 5.0 지원</li>
        <li>✔ 최대 24시간 사용 가능</li>
        <li>✔ 노이즈 캔슬링 기능 포함</li>
      </ul>
      <div class="img-container" :class="{ show: isExpanded }">
        <img src="/public/images/details.jpg" alt="details" />
        <div class="gradient">
          <button class="more" @click="toggleReadMore">
            {{ isExpanded ? "Close" : "Read More" }}
          </button>
        </div>
      </div>
    </div>
    <!-- review -->
    <!-- <div class="content" v-if="activeTab === 'review'">review</div> -->
    <ReviewCom class="content" v-if="activeTab === 'review'" />
  </div>
</template>

<script setup>
import ReviewCom from "./Review-com.vue";
import { ref } from "vue";

const activeTab = ref("detail");
const isExpanded = ref(false);
const toggleReadMore = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style lang="scss" scoped>
.tab {
  padding-top: 100px;
  text-align: center;
  button {
    width: 300px;
    min-height: 30px;
    display: inline-block;
    line-height: 1;
    padding: 12px 16px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    transition: all 0.2s ease;
    // margin-left: 10px;
    &:hover {
      background-color: rgb(106, 169, 252);
      opacity: 0.8;
      color: #fff;
    }
    &.active {
      background-color: rgb(106, 169, 252);
      color: #fff;
      font-weight: 600;
    }
  }
  .content {
    padding-top: 80px;
    max-width: 600px;
    margin: auto;
    .img-container {
      position: relative;
      width: 100%;
      height: 500px;
      overflow: hidden;
      transition: all 0.3s ease;
      &.show {
        height: auto;
      }
      img {
        width: 100%;
      }
      .gradient {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          white 100%
        );
      }
    }
    .more {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    ul {
      padding: 50px 0;
    }
  }
}
</style>
