import { createRouter, createWebHistory } from "vue-router";
import AbsensiPage from "../views/AbsensiPage.vue";
import JadwalEventPage from "../views/JadwalEventPage.vue";
import InventarisBarangPage from "../views/InventarisBarangPage.vue";
import PengajuanPeminjamanPage from "../views/PengajuanPeminjamanPage.vue";
const routes = [
  {
    path: "/",
    name: "absensi",
    component: AbsensiPage,
  },
  {
    path: "/jadwalevent",
    name: "jadwalevent",
    component: JadwalEventPage,
  },

  {
    path: "/inventarisbarang",
    name: "inventarisbarang",
    component: InventarisBarangPage,
  },
  {
    path: "/pengajuanpeminjaman", // Tambahkan rute ini
    name: "pengajuanpeminjaman",
    component: PengajuanPeminjamanPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/JadwalEventPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
