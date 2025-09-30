import { createApp } from "vue";
import App from "./App.vue";

// css
import "./assets/style/main.scss";

// router
import router from "./router/router";

createApp(App).use(router).mount("#app");
