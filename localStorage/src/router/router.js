import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Reserve from "@/views/Reserve.vue";
import Confirm from "@/views/Confirm.vue";
import Review from "@/views/Review.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/reserve",
    component: Reserve,
  },
  {
    path: "/confirm",
    component: Confirm,
  },
  {
    path: "/review",
    component: Review,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
