import Vue from "vue";
import Router from "vue-router";
import MovieRoter from "./movie";
import MineRouter from "./mine";
import SinemaRouter from "./sinema";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    MovieRoter,
    MineRouter,
    SinemaRouter,
    { path: "/*", redirect: "/movie" }
  ]
});
