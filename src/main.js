import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import i18n from "./lang";

createApp(App).use(i18n).use(router).use(store).mount("#app");
