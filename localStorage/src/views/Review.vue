<template>
  <div class="box">
    <h2>Review</h2>
    <!-- 로그인상태 안내 -->
    <p v-if="loggedInUser">
      회원 <b>{{ loggedInUser }}</b> 님
    </p>
    <p v-else>리뷰 작성은 로그인 후 가능합니다.</p>
    <!-- 리뷰 입력창 (로그인한 회원만 표시) -->
    <div v-if="loggedInUser" class="form">
      <input
        v-model="rating"
        type="number"
        min="1"
        max="5"
        placeholder="rating(1-5)"
      />
      <textarea v-model="text" placeholder="후기를 입력하세요."></textarea>
      <button @click="saveReview">save</button>
    </div>
    <!-- 로그인 안한 사람은 작성 불가 -->
    <div v-else>
      <button @click="goLogin">로그인하고 리뷰작성하기</button>
    </div>
    <hr />
    <!-- 모든 리뷰 보기 -->
    <h3>All Review</h3>
    <div v-if="reviews.length > 0">
      <div v-for="(review , i) in reviews" :key="i" class="review">
        <p>이름 : {{review.name}}</p>
        <p>별점 : {{review.rating}}</p>
        <p>후기 : {{review.text}}</p>
      </div>
    </div>
    <p v-else>아직 리뷰가 없습니다.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const loggedInUser = ref(null);
const rating = ref("");
const text = ref("");
const reviews = ref([]);
const router = useRouter();
// ✅ 더미 리뷰 (로그인 안 해도 보이도록)
const dummyReviews = [
  {
    id: 1,
    name: "홍길동",
    rating: 5,
    text: "정말 편리했어요! 다음에도 이용할게요 😊",
  },
  {
    id: 2,
    name: "김철수",
    rating: 4,
    text: "보관소 위치가 좋아서 찾기 쉬웠어요 👍",
  },
  {
    id: 3,
    name: "이영희",
    rating: 5,
    text: "서비스가 깔끔하고 직원도 친절했어요 💕",
  },
];
// 페이지 열릴때 로그인 체크 + 리뷰 불러오기
onMounted(() => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    loggedInUser.value = user;
  }
  const saved = localStorage.getItem("reviews");
  if (saved) {
    reviews.value = JSON.parse(saved);
  } else {
    reviews.value = dummyReviews;
  }
});
// 리뷰저장하기
const saveReview = () => {
  if (!rating.value || !text.value) {
    alert("별점과 후기를 모두 입력해주세요.");
    return;
  }
  const newReview = {
    id: Date.now(),
    name: loggedInUser.value,
    rating: rating.value,
    text: text.value,
  };
  reviews.value.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews.value));
  alert("리뷰가 저장되었습니다.");
  rating.value = "";
  text.value = "";
};
// goLogin
const goLogin = () => {
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.box {
  width: 320px;
  margin: 40px auto;
  padding: 20px;
  background: #eef5ff;
  border-radius: 12px;
}
.form input,
.form textarea {
  width: 100%;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  background: #0a66c2;
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
}
.review {
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
</style>
