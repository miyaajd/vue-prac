<template>
  <div class="reser_box">
    <h2>Reservation List</h2>
    <!-- 총 예약 갯수 -->
    <p>Total : {{ total }}</p>
    <!-- 예약추가폼 -->
    <form class="form" @submit.prevent="addReservation">
      <input type="text" v-model="newName" placeholder="name" />
      <select v-model="newService">
        <option value="" disabled>select service</option>
        <option value="짐보관">짐보관</option>
        <option value="제빙기청소">제빙기청소</option>
      </select>
      <input type="date" v-model="newDate" />
      <button type="submit">add</button>
    </form>
    <!-- list -->
    <div v-for="(item, index) in reservations" :key="index" class="card">
      <p>Name : {{ item.name }}</p>
      <p>Service : {{ item.service }}</p>
      <p>Date : {{ item.date }}</p>
      <!-- 예약상태 -->
      <p v-if="item.done">⁕ Complete</p>
      <p v-else>⨯ Not Complete</p>
      <!-- 상태바꾸기버튼 -->
      <button @click="toggleStatus(index)">Change Status</button>
      <br />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
const reservations = reactive([
  { name: "홍길동", service: "짐 보관", date: "2025-09-20", done: false },
  { name: "김철수", service: "제빙기 청소", date: "2025-10-01", done: false },
]);
// newData
const newName = ref("");
const newService = ref("");
const newDate = ref("");
// addReservation
const addReservation = () => {
  if (!newName.value || !newService.value || !newDate.value) {
    alert("Please select informations .");
    return;
  }
  // console.log("click");
  reservations.push({
    name: newName.value,
    service: newService.value,
    date: newDate.value,
    done: false,
  });
  // 입력창 초기화
  newName.value = "";
  newService.value = "";
  newDate.value = "";
};
// change status
const toggleStatus = (index) => {
  // console.log(index);
  reservations[index].done = !reservations[index].done;
};
// today
// toISOString() 날짜 객체를 표준시간 형식 문자열로 바꿔주는 함수
const today = new Date().toISOString().split("T")[0];
// console.log(today);
// 날짜가 지낫으면 자동 완료 처리
// watch() 날짜 변경 감시
watch(
  reservations,
  (newVal) => {
    newVal.forEach((item) => {
      if (item.date < today) {
        item.done = true; //날짜가 오늘보다 이전이면 완료처리
      }
    });
  },
  { deep: true, immediate: true } // deep: 깊게 감시(예약배열안에 있는 item.done 같은 속성도 감시해라)
);
// 예약 총 개수 감시
const total = computed(() => {
  return reservations.length;
});
</script>

<style scoped>
.reser_box {
  max-width: 600px;
  background-color: #efefef;
  border: 1px solid #999;
  cursor: pointer;
  padding: 30px 16px;
  border-radius: 8px;
  text-align: center;
  height: auto;
  margin: auto;
}
button {
  margin: 16px 8px;
  padding: 5px 16px;
}
button:hover {
  background-color: #ddd;
}
</style>
