<template>
  <div>
    <h2>Confirm Reservation</h2>
    <p>
      회원 <b>{{ loggedInUser }}</b> 님
    </p>
    <div v-if="myReservations.length > 0">
      <ul>
        <li v-for="item in myReservations" :key="item.id">
          {{ item.name }} | {{ item.date }}
          <span v-if="isPast(item.date)">⁕완료⁕</span>
          <span v-else>예약중</span>
          <button @click="cancleReservation(item.id)">Cancle</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>예약 정보가 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loggedInUser = ref(null);
const reservations = ref([]);

// 로그인 체크
onMounted(() => {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("로그인 후 확인 가능합니다.");
    router.push("/login");
    return;
  } else {
    loggedInUser.value = user;
  }
  const saved = localStorage.getItem("reservations");
  reservations.value = saved ? JSON.parse(saved) : [];
});
// 로그인 회원 예약만 필터링
const myReservations = computed(() => {
  return reservations.value.filter((r) => r.name === loggedInUser.value);
});
// 예약날짜가 지났는지 확인
const isPast = (dateStr) => {
  // console.log(dateStr);
  const today = new Date().toISOString().split("T")[0]; //YYYY-MM-DD로 변환코드
  //   console.log(today);
  return dateStr < today;
};
// 예약취소버튼 제어
const cancleReservation = (id) => {
  reservations.value = reservations.value.filter((item) => item.id !== id);
//   로컬스토리지 업데이트
  localStorage.setItem("reservations" , JSON.stringify(reservations.value))
  alert("예약이 취소되었습니다.")
};
</script>

<style lang="scss" scoped></style>
