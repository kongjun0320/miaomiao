export default {
  path: "/mine",
  component: () => import("../../views/Mine"),
  children: [
    { path: "center", component: () => import("../../views/Mine/Center.vue") },
    { path: "login", component: () => import("../../components/Login") },
    {
      path: "findPassword",
      component: () => import("../../views/Mine/FindPassword.vue")
    },
    {
      path: "register",
      component: () => import("../../views/Mine/Register.vue")
    },
    { path: "", redirect: "center" }
  ]
};
