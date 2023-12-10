import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import DharmaView from "../pages/DharmaView.vue";
import departemenView from "../pages/departemenView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path :"/dharma",
      name: "dharma",
      component: DharmaView
    },
    {
      path: "/departemenView",
      name: "departemenView",
      component: departemenView
    }
  ],
});

export default router;
