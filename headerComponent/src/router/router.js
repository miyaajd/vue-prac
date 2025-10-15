import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";
import Review from "@/views/Review.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/reser",
    component: Reser,
    name: "Reser",
  },
  {
    path: "/review",
    component: Review,
    name: "Review",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
