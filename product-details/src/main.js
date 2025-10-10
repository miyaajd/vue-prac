import { createApp } from "vue";
import App from "./App.vue";

// css
import "./assets/main.css";
import "./assets/styles/main.scss";

// router
import router from "./router/router";

createApp(App).use(router).mount("#app");
