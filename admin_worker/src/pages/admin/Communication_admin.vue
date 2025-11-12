<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h2 class="text-3xl font-bold mb-6">고객 소통 관리</h2>
    <!-- 통계카드 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div
        :class="[card.backgroundClass, 'rounded-lg shadow-lg p-6 text-white']"
        v-for="card in statCards"
        :key="card.id">
        <div class="flex items-center justify-between">
          <!-- 텍스트 -->
          <div>
            <p :class="[card.labelClass, 'text-sm mb-1']">{{ card.label }}</p>
            <p class="text-3xl font-bold">
              {{}}
              <span v-if="card.suffix">{{ card.suffix }}</span>
            </p>
          </div>
          <!-- 아이콘 -->
          <div
            class="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <i :class="[card.iconClass, 'text-2xl', card.iconColor]"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 필터 및 검색 -->
    <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- 버튼 -->
        <div class="flex flex-wrap gap-2 flex-1">
          <button
            v-for="(filter, i) in filters"
            :key="i"
            @click="currentFilter = filter.value"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer',
              currentFilter === filter.value
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]">
            <i :class="[filter.icon, 'mr-2']"></i>
            {{ filter.label }}
          </button>
        </div>
        <!-- 검색 -->
        <div class="flex gap-2">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="고객명으로 검색하세요"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>
    </div>
    <!-- 대화 목록 -->
    <div class="bg-white rounded-lg shadow-sm">
      <!-- 반응형 때 x축 스크롤 -->
      <div class="overflow-x-auto">
        <!-- 테이블 -->
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                대화 시작일
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                고객명
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                마지막 메시지
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                응답 시간
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                만족도
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              v-for="conversation in filteredConversations"
              :key="conversation.id"
              class="hover:bg-gray-50 transition-colors">
              <!-- 대화 시작일 -->
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatDate(conversation.startDate) }}
              </td>
              <!-- 고객명 -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <p
                    :class="[
                      'mr-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold',
                      getCustomerAvatarBg(conversation.customerName),
                    ]">
                    {{ conversation.customerName[0] }}
                  </p>
                  <span class="text-sm text-gray-900">
                    {{ conversation.customerName }}
                  </span>
                </div>
              </td>
              <!-- 마지막 메시지 -->
              <td class="px-6 py-4 text-sm text-gray-900 max-w-xs">
                <div class="flex items-center">
                  <span>
                    {{ conversation.lastMessage }}
                  </span>
                  <span
                    v-if="conversation.unreadCount > 0"
                    class="ml-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {{ conversation.unreadCount }}
                  </span>
                </div>
              </td>
              <!-- 상태 -->
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 py-1 text-xs font-medium rounded-full',
                    conversation.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : conversation.status === 'waiting'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800',
                  ]">
                  {{ getStatusText(conversation.status) }}
                </span>
              </td>
              <!-- 응답 시간 -->
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ conversation.responseTime }}분
              </td>
              <!-- 만족도 -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <!-- 별 -->
                  <div class="flex">
                    <i
                      v-for="i in 5"
                      :key="i"
                      :class="[
                        'fas fa-star text-xs',
                        i <= conversation.rating ? 'text-yellow-400' : 'text-gray-300',
                      ]"></i>
                  </div>
                  <!-- 점수 -->
                  <span v-if="conversation.rating" class="ml-2 text-xs text-gray-600">
                    ({{ conversation.rating }})
                  </span>
                  <span v-else class="ml-2 text-xs text-gray-400">미평가</span>
                </div>
              </td>
              <!-- 관리 -->
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button  class="text-indigo-600 hover:text-indigo-900" @click="openConversation(conversation)">
                  <i class="fas fa-comment-dots mr-1"></i> 대화보기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

// 버튼 클릭 함수
const currentFilter = ref("all");
// 서치쿼리
const searchQuery = ref("");

// 더미
const statCards = computed(() => [
  {
    id: "total",
    label: "전체 대화",
    // value: totalConversations.value,
    suffix: "",
    labelClass: "text-blue-100",
    backgroundClass: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconClass: "fas fa-comments",
    iconColor: "text-blue-500",
  },
  {
    id: "active",
    label: "활성 대화",
    // value: activeConversations.value,
    suffix: "",
    labelClass: "text-green-100",
    backgroundClass: "bg-gradient-to-br from-green-500 to-green-600",
    iconClass: "fas fa-comment-dots",
    iconColor: "text-green-500",
  },
  {
    id: "avg-response",
    label: "평균 응답 시간",
    // value: avgResponseTime.value,
    suffix: "m",
    labelClass: "text-yellow-100",
    backgroundClass: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    iconClass: "fas fa-clock",
    iconColor: "text-yellow-600",
  },
  {
    id: "satisfaction",
    label: "만족도",
    // value: satisfactionRate.value,
    suffix: "%",
    labelClass: "text-purple-100",
    backgroundClass: "bg-linear-to-br from-purple-500 to-purple-600",
    iconClass: "fas fa-star",
    iconColor: "text-purple-500",
  },
]);

// 필터링 버튼
const filters = [
  { label: "전체", value: "all", icon: "fas fa-list" },
  { label: "활성", value: "active", icon: "fas fa-comment-dots" },
  { label: "대기중", value: "waiting", icon: "fas fa-clock" },
  { label: "완료", value: "closed", icon: "fas fa-check-circle" },
];

// 테이블 더미
const conversations = ref([
  {
    id: 1,
    customerName: "김철수",
    email: "kim@example.com",
    startDate: new Date("2025-11-10"),
    lastMessage: "감사합니다. 다음에도 이용하겠습니다!",
    status: "closed",
    responseTime: 15,
    rating: 5,
    unreadCount: 0,
  },
  {
    id: 2,
    customerName: "이영희",
    email: "lee@example.com",
    startDate: new Date("2025-11-09"),
    lastMessage: "청소 후 확인을 받아볼 수 있나요?",
    status: "active",
    responseTime: 8,
    rating: 4,
    unreadCount: 2,
  },
  {
    id: 3,
    customerName: "박민수",
    email: "park@example.com",
    startDate: new Date("2025-11-12"),
    lastMessage: "혹시 시간 변경이 가능한가요?",
    status: "waiting",
    responseTime: null,
    rating: null,
    unreadCount: 1,
  },
]);

//계산된 속성
const filteredConversations = computed(() => {
  let result = conversations.value;
  if (currentFilter.value !== "all") {
    result = result.filter((c) => c.status === currentFilter.value);
  }
  // a-b 내림차순 // b-a 오름차순
  return result.sort((a, b) => b.startDate - a.startDate);
});

// 날짜포맷 함수
function formatDate(date) {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

//
function getCustomerAvatarBg(name) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  // charCodeAt - 문자열의 첫번째 문자의 유니코드 값을 반환하는 메서드
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

// 상태변경함수
function getStatusText(status) {
  const statusMap = {
    active: "진행중",
    waiting: "대기중",
    closed: "답변완료",
  };
  return statusMap[status];
}
</script>

<style lang="scss" scoped></style>
