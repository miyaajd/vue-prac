import About from "@/views/About.vue";
import Details from "@/views/Details.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Products from "@/views/Products.vue";
import Signup from "@/views/Signup.vue";
import { createRouter, createWebHistory } from "vue-router";
// page
const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    component: About,
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
    path: "/products",
    component: Products,
  },
  {
    path: "/products/:name/:price",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
