import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import { firstMenu, mapMenuToRoutes } from "@/utils/mapMenuToRoutes";
import { getStorage, setStorage } from "@/utils/storage";
import { MENUKEY, TOKENKEY } from "@/config/key";

export const useLoginStore = defineStore("login", () => {
  const token = ref("");
  const menus = ref([
    {
      path: "/main",
      name: "首页",
      children: [{ path: "/home", name: "Home" }]
    },
    {
      path: "/system",
      name: "系统",
      children: [
        {
          path: "/me",
          name: "Me"
        },
        { path: "/info", name: "Info" }
      ]
    }
  ]);

  const handleLogin = () => {
    setStorage(TOKENKEY, "token");
    setStorage(MENUKEY, menus.value);

    // 动态添加路由
    const routes = mapMenuToRoutes(menus.value);

    routes.forEach((route) => {
      router.addRoute("Main", route);
    });
    if (firstMenu?.path) {
      router.push(firstMenu?.path);
    } else {
      router.push("/main");
    }
  };

  const loadCache = () => {
    const TOKEN = getStorage(TOKENKEY);
    const MENUS = getStorage(MENUKEY);

    if (TOKEN && MENUS) {
      token.value = TOKEN;
      menus.value = MENUS;

      const routes = mapMenuToRoutes(MENUS);
      routes.forEach((route) => {
        router.addRoute("Main", route);
      });
    }
  };

  return {
    token,
    handleLogin,
    loadCache
  };
});
