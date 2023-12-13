import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import DharmaView from "../pages/DharmaView.vue";
import departemenView from "../pages/departemenView.vue";
import akreditasiView from "../pages/akreditasiView.vue";
import kalenderAkademikView from "../pages/kalenderAkademikView.vue";
import semuaBeritaView from "../pages/semuaBeritaView.vue";
import semuaInformasiView from "../pages/semuaInformasiView.vue";
import beritaDetails from "../components/beritaDetails.vue";
import sejarahSingkatView from "../pages/sejarahSingkatView.vue";
import visiMisiView from "../pages/visiMisiView.vue";
import manajemenView from "../pages/manajemenView.vue";
import strukturOrganisasiView from "../pages/strukturOrganisasiView.vue";
import masterPlanView from "../pages/masterPlanView.vue";
import petaKampusView from "../pages/petaKampusView.vue";
import mediatekView from "../pages/mediatekView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dharma",
      name: "dharma",
      component: DharmaView,
    },
    {
      path: "/departemenView",
      name: "departemenView",
      component: departemenView,
    },
    {
      path: "/akreditasiView",
      name: "akreditasiView",
      component: akreditasiView,
    },
    {
      path: "/kalenderAkademikView",
      name: "kalenderAkademikView",
      component: kalenderAkademikView,
    },
    {
      path: "/semuaBeritaView",
      name: "semuaBeritaView",
      component: semuaBeritaView,
    },
    {
      path: "/beritaDetails/:id",
      name: "beritaDetails",
      component: beritaDetails,
    },
    {
      path: "/semuaInformasiView",
      name: "semuaInformasiView",
      component: semuaInformasiView,
    },
    {
      path: "/sejarahSingkatView",
      name: "sejarahSingkatView",
      component: sejarahSingkatView,
    },
    {
      path: "/visiMisiView",
      name: "visiMisiView",
      component: visiMisiView,
    },
    {
      path: "/manajemenView",
      name: "manajemenView",
      component: manajemenView,
    },
    {
      path: "/strukturOrganisasiView",
      name: "strukturOrganisasiView",
      component: strukturOrganisasiView,
    },
    {
      path: "/masterPlanView",
      name: "masterPlanView",
      component: masterPlanView,
    },
    {
      path: "/petaKampusView",
      name: "petaKampusView",
      component: petaKampusView,
    },
    {
      path: "/mediatekView",
      name: "mediatekView",
      component: mediatekView,
    },
  ],
});

export default router;
