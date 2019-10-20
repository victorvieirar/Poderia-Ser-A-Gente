import Vue from "vue";
import VueRouter from "vue-router";

import { Home, Abada } from "../pages";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/abada", component: Abada }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
