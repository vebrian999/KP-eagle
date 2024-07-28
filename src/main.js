import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "flowbite";
import "./assets/style.css";
import "./assets/app.css";

createApp(App).use(router).mount("#app");
