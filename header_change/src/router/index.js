import { createRouter, createWebHistory } from "vue-router";
import Detail from "@/views/Detail.vue";
import HomeVue from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import Faq from "@/views/Faq.vue";
const routes = [
    {path:"/" , component:HomeVue , name:"HomeVue"},
    {path:"/reser" , component:ReserVue , name:"ReserVue"},
    {path:"/review" , component:ReviewVue , name:"ReviewVue"},
    {path:"/detail/:id" , component:Detail , name:"Detail"},
    {path:"/faq" , component:Faq , name:"Faq"},
    // 404
    {path:"/:pathMatch(.*)*" , component: NotFound, name:"NotFound"},

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
