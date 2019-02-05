import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/terms",
      name: "terms",
      component: () =>
        import("./views/Terms.vue")
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        import("./views/Privacy.vue")
    },
    {
      path: "/cookies",
      name: "cookies",
      component: () =>
        import("./views/Cookies.vue")
    }
  ]
});
