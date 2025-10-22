<template>
  <div>
    <h2>Reservation</h2>
    <p>
      회원 <b>{{ loggedInUser }}</b> 님
    </p>
    <form @submit.prevent="saveReservation">
      <input type="date" v-model="date" />
      <button type="submit">예약하기</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loggedInUser = ref(null);
const date = ref("");
// 로그인 체크
onMounted(() => {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("로그인 후 예약 가능합니다.");
    router.push("/login");
  } else {
    loggedInUser.value = user;
  }
});
// 예약하기 함수
const saveReservation = () => {
  if (!date.value) {
    alert("날짜를 선택하세요.");
    return;
  }
  const newReservation = {
    id: Date.now(),
    name: loggedInUser.value, //로그인 회원이름 사용
    date: date.value,
  };
  const saved = localStorage.getItem("reservations");
  let reservations = saved ? JSON.parse(saved) : [];
  reservations.push(newReservation);
  localStorage.setItem("reservations", JSON.stringify(reservations));
  alert("예약이 저장되었습니다.");
  date.value = "";
  //   예약확인 페이지로 이동
  router.push("/confirm");
};
</script>

<style lang="scss" scoped></style>
