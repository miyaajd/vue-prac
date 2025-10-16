import Detail from "@/views/Detail.vue";
import HomeVue from "@/views/Home.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {path:"/" , component:HomeVue , name:"HomeVue"},
    {path:"/reser" , component:ReserVue , name:"ReserVue"},
    {path:"/review" , component:ReviewVue , name:"ReviewVue"},
    {path:"/detail/:id" , component:Detail , name:"Detail"},

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
