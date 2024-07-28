import { createRouter, createWebHistory } from "vue-router";
import AbsensiPage from "../views/AbsensiPage.vue";
import JadwalEventPage from "../views/JadwalEventPage.vue";
const routes = [
  {
    path: "/",
    name: "absensi",
    component: AbsensiPage,
  },
    {
    path: '/jadwalevent',
    name: 'jadwalevent',
    component: JadwalEventPage
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
