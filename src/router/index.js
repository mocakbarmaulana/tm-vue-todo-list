import { createRouter, createWebHistory } from "vue-router";

import AboutItem from "@/views/AboutItem";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/about",
    name: "About",
    component: AboutItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
