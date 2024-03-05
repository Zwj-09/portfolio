const routes = [
  {
    path: "/info",
    name: "Info",
    meta: {
      name: "消息列表"
    },
    component: () => import("@/views/Main/System/info.vue")
  },
  {
    path: "/me",
    name: "Me",
    meta: {
      name: "个人中心"
    },
    component: () => import("@/views/Main/System/me.vue")
  },
  {
    path: "/test",
    name: "Test",
    meta: {
      name: "测试"
    },
    component: () => import("@/views/Main/System/info.vue")
  }
];

export default routes;
