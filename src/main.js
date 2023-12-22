import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import RestPage from "./pages/RestPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/rest", component: RestPage },
];

const router = createRouter({
  base: "/delivery-vue/",
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
