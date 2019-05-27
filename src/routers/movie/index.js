export default {
  path: "/movie",
  component: () => import("../../views/Movie"),
  children: [
    {
      path: "",
      redirect: "/movie/nowplaying"
    },
    {
      path: "nowplaying",
      component: () => import("../../components/NowPlaying")
    },
    {
      path: "commingsoon",
      component: () => import("../../components/CommingSoon")
    },
    {
      path: "search",
      component: () => import("../../components/Search")
    },
    {
      path: "city",
      component: () => import("../../components/City")
    }
  ]
};
