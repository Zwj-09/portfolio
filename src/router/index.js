import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  {
    path: "/",
    name: "首页",
    meta: {
      name: "首页"
    },
    component: () => import("@/views/main.vue")
  }
];

// const pages = import.meta.glob("@/views/**/page.js", {
//   eager: true,
//   import: "default"
// });

// const routes = Object.entries(pages).map(([path, config]) => {
//   console.log("sss", path, config);
//   return {
//     // path: "/",
//     //     name: "首页",
//     //     component: () => import("@/views/Home/index.vue")
//     meta: config
//   };
// });
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
