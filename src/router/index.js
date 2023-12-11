import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import DharmaView from "../pages/DharmaView.vue";
import departemenView from "../pages/departemenView.vue";
import akreditasiView from "../pages/akreditasiView.vue";
import kalenderAkademikView from "../pages/kalenderAkademikView.vue";
import semuaBeritaView from "../pages/semuaBeritaView.vue";
import semuaInformasiView from "../pages/semuaInformasiView.vue";


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
    },
    {
      path: "/akreditasiView",
      name: "akreditasiView",
      component: akreditasiView
    },
    {
      path: "/kalenderAkademikView",
      name: "kalenderAkademikView",
      component: kalenderAkademikView
    },
    {
      path: "/semuaBeritaView",
      name: "semuaBeritaView",
      component: semuaBeritaView
    },
    {
      path: "/semuaBeritaView",
      name: "semuaBeritaView",
      component: semuaBeritaView
    },
    {
      path: "/semuaInformasiView",
      name: "semuaInformasiView",
      component: semuaInformasiView
    },
  ],
});

export default router;
