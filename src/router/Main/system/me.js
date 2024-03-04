export default {
  path: "/me",
  name: "Me",
  meta: {
    name: "个人中心"
  },
  component: () => import("@/views/Main/System/me.vue")
};
