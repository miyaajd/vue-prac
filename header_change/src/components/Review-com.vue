<template>
  <div class="home">
    <h1>🏠 review 페이지</h1>
    <!-- 리뷰 카드 목록 -->
    <div class="reviews">
      <div class="card" v-for="(review, i) in reviews" :key="i">
        <h3>{{ review.user }}</h3>
        <p>{{ review.comment }}</p>
        <span>{{ "⭐".repeat(review.rating) }}</span>
      </div>
    </div>
    <!-- 리뷰남기기 -->
    <div class="review">
      <h2>리뷰 남기기</h2>
      <!-- name -->
      <input type="text" v-model="name" placeholder="이름을 입력하세요." />
      <!-- rating -->
      <div class="stars">
        <span
          v-for="n in 5"
          :key="n"
          @click="rating = n"
          :class="{ active: n <= rating }"
          >★</span
        >
      </div>
      <!-- review -->
      <textarea
        v-model="reviewText"
        placeholder="후기를 입력하세요."
      ></textarea>
      <!-- upload images -->
      <input type="file" @change="uploadImg" accept="image/" />
      <!-- submit -->
      <button @click="submitReview">등록하기</button>
      <!-- review-list -->
      <div class="review-list" v-if="reviewList.length > 0">
        <h3>작성된 리뷰</h3>
        <div
          class="review-item card"
          v-for="(item, index) in reviewList"
          :key="index"
        >
          <div class="review-header">
            <p>{{ item.name }}</p>
            <p>{{ item.date }}</p>
          </div>
          <p class="stars"><span v-for="n in item.rating" :key="n">⭐</span></p>
          <p class="text">{{ item.reviewText }}</p>
          <img :src="item.image" alt="리뷰사진" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const reviews = [
  { user: "민지", comment: "서비스가 정말 좋아요!", rating: 5 },
  { user: "현우", comment: "배송도 빠르고 친절했습니다 😊", rating: 4 },
  { user: "수연", comment: "깔끔하고 만족스러워요!", rating: 5 },
];

const name = ref("");
const reviewText = ref("");
const reviewList = ref([]);
const rating = ref(0);
const iamgeUrl = ref("");

// submit button active
const submitReview = (e) => {
  e.preventDefault();
  // 오늘날짜 자동입력
  const today = new Date().toLocaleDateString();
  if (
    name.value.trim() === "" ||
    rating.value === 0 ||
    reviewText.value.trim() === ""
  ) {
    alert("이름 , 별점 , 후기를 모두 입력하세요.");
    return;
  }
  reviewList.value.push({
    name: name.value,
    rating: rating.value,
    reviewText: reviewText.value,
    date: today,
    image: iamgeUrl.value,
  });
  //   console.log(today);
  // 초기화
  name.value = "";
  reviewText.value = "";
  iamgeUrl.value = "";
  rating.value = 0
};
// 사진 업로드 함수
const uploadImg = (e) => {
  const file = e.target.files[0];
  if (file) {
    iamgeUrl.value = URL.createObjectURL(file);
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
  .reviews {
    text-align: left;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    .review-card {
      background: #fff;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: 0.3s;

      h3 {
        margin-bottom: 10px;
      }

      span {
        display: inline-block;
        margin-top: 10px;
        font-weight: bold;
      }
    }
  }
  .review {
    h2 {
      margin-bottom: 30px;
    }
    // max-width: 450px;
    border: 0.5px solid #efefef;
    margin: 50px auto;
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    text-align: center;
    input,
    textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    input[type="file"] {
      border: none;
      height: 80px;
    }
    textarea {
      resize: none;
      height: 80px;
    }
    .stars {
      font-size: 28px;
      color: #ccc;
      cursor: pointer;
      margin-bottom: 10px;
      span {
        transition: all 0.3s ease;
        &.active {
          color: gold;
        }
      }
    }
    button {
      max-width: 300px;
      min-height: 30px;
      display: inline-block;
      line-height: 1;
      padding: 12px 16px;
      cursor: pointer;
      border: none;
      font-size: 16px;
      transition: all 0.2s ease;
      background-color: rgb(106, 169, 252);
      color: #fff;
      border-radius: 8px;
      font-weight: 500;
      // margin-left: 10px;
      &:hover {
        opacity: 0.8;
      }
    }
    .review-item {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;

  .review-header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #555;
    margin-bottom: 4px;
  }

  .stars {
    font-size: 20px;
    color: #ffcc00;
    margin-bottom: 5px;
  }

  .text {
    font-size: 14px;
    color: #333;
    margin-bottom: 6px;
  }

  .review-image {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 8px;
  }
}
  }
}
</style>
