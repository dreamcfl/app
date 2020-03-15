import Vue from "vue";
import Router from "vue-router";
import Home from "@v/home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "base",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/writeNote",
      name: "writeNote",
      component: () => import("@v/writeNote")
    },
    {
      path: "/viewNote",
      name: "viewNote",
      component: () => import("@v/viewNote")
    },
    {
      path: "/share",
      name: "share",
      component: () => import("@v/share")
    }
  ]
});
