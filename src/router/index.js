import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  { path: "/", redirect: "/main" },
  {
    path: "/main",
    name: "Main",
    meta: {
      name: "首页"
    },
    component: () => import("@/views/Main/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      name: "登录"
    },
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    meta: {
      name: "404"
    },
    component: () => import("@/views/NotFound/index.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach(async (to, from) => {
  NProgress.start();
  document.title = to.meta.name;
  return true;
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
