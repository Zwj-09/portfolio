export default {
  path: "/test",
  name: "Test",
  meta: {
    name: "测试"
  },
  component: () => import("@/views/Main/System/info.vue")
};
