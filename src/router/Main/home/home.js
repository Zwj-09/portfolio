export default {
  path: "/home",
  name: "Home",
  meta: {
    name: "首页"
  },
  component: () => import("@/views/Main/Home/index.vue")
};
