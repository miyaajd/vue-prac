// 페이지호출

import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
import Products from "@/views/Products.vue";
import User from "@/views/User.vue";
import { createRouter, createWebHistory } from "vue-router";

// 페이지 주소와 연결
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/post/:postId",
    component: Post,
  },
  {
    path: "/products/:id",
    component: Products,
  },
  {
    path: "/user/:username",
    component: User,
  },
];
// router생성
const router = createRouter({ history: createWebHistory(), routes });
export default router;
