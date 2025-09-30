// 페이지호출
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Notice from "@/views/Notice.vue";
import Reserve from "@/views/Reserve.vue";
import { createRouter, createWebHistory } from "vue-router";

// 페이지 주소와 연결
const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/reserve",
    component: Reserve,
  },{
    path: "/notice",
    component: Notice
  }
];
// router생성
const router = createRouter({ history: createWebHistory(), routes });
export default router;
