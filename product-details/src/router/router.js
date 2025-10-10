// 페이지호출

import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";
import { createRouter, createWebHistory } from "vue-router";

// 페이지 주소와 연결
const routes = [
  { path: "/", component: Home },
  { path: "/reser", component: Reser },
];
// router생성
const router = createRouter({ history: createWebHistory(), routes });
export default router;
