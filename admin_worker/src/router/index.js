import { createRouter, createWebHistory } from "vue-router";
import Detail from "@/views/Detail.vue";
import HomeVue from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import Faq from "@/views/Faq.vue";
import LoginAdmin from "@/pages/admin/LoginAdmin.vue";
import LoginWorker from "@/pages/worker/LoginWorker.vue";
import AdminHome from "@/pages/admin/AdminHome.vue";
import Dashboard_admin from "@/pages/admin/Dashboard_admin.vue";
import Communication_admin from "@/pages/admin/Communication_admin.vue";
import Customers_admin from "@/pages/admin/Customers_admin.vue";
import Inquiries_admin from "@/pages/admin/Inquiries_admin.vue";
import Reservations_admin from "@/pages/admin/Reservations_admin.vue";
import Settings_admin from "@/pages/admin/Settings_admin.vue";
import Workers_admin from "@/pages/admin/Workers_admin.vue";
import Dashboard from "@/pages/worker/Dashboard.vue";
import Jobs from "@/pages/worker/Jobs.vue";
import Payment from "@/components/reservation/Payment.vue";
import Calender from "@/pages/worker/Calender.vue";

const routes = [
  { path: "/", component: HomeVue, name: "HomeVue" },
  { path: "/reser", component: ReserVue, name: "ReserVue" },
  { path: "/review", component: ReviewVue, name: "ReviewVue" },
  { path: "/detail/:id", component: Detail, name: "Detail" },
  { path: "/faq", component: Faq, name: "Faq" },
  // 404
  { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" },
  // 관리자 페이지
  { path: "/admin", component: LoginAdmin, name: "LoginAdmin" },
  {
    path: "/admin",
    component: AdminHome,
    redirect: "admin/dashboard",
    children: [
      { path: "dashboard", component: Dashboard_admin },
      { path: "customer-communication", component: Communication_admin },
      { path: "customers", component: Customers_admin },
      { path: "inquiries", component: Inquiries_admin },
      { path: "reservations", component: Reservations_admin },
      { path: "settings", component: Settings_admin },
      { path: "workers", component: Workers_admin },
    ],
  },
  // 기사페이지
  { path: "/worker", component: LoginWorker, name: "LoginWorker" },
  {
    path: "/worker/dashboard",
    component: Dashboard,
    redirect: "/worker/dashboard/jobs",
    children: [
      { path: "jobs", component: Jobs, name: "MobileJobs" },
      { path: "payment", component: Payment, name: "MobilePayment" },
      { path: "calender", component: Calender, name: "MobileCalender" },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
