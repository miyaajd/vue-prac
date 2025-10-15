<template>
  <div class="reviewWrap">
    <h2>Review</h2>
    <!-- review card list -->
    <div class="reviews">
      <div class="review-card" v-for="(review, index) in reviews" :key="index">
        <h4>{{ review.user }}</h4>
        <p>{{ review.comment }}</p>
        <span>{{ "⭐".repeat(review.rating) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const reviews = [
  { user: "민지", comment: "서비스가 정말 좋아요!", rating: 5 },
  { user: "현우", comment: "배송도 빠르고 친절했습니다 😊", rating: 4 },
  { user: "수연", comment: "깔끔하고 만족스러워요!", rating: 5 },
];
</script>

<style lang="scss" scoped>
.reviewWrap {
  padding-top: 100px;
  text-align: center;
  .reviews {
    max-width: 1000px;
    margin: auto;
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    .review-card {
      padding: 20px 30px;
      background-color: #fefefe;
      border-radius: 12px;
      box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.2);
      text-align: left;
      flex: 1;
      p {
        margin: 10px 0;
      }
    }
  }
}
</style>
