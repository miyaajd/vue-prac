// 페이지호출
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

// 페이지 주소와 연결
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
];
// router생성
const router = createRouter({ history: createWebHistory(), routes });
export default router;
