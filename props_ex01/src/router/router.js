import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

// 페이지 주소와 연결
const routes = [{ path: "/", component: Home, name: "Home" }];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
