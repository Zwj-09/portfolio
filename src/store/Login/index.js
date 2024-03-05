import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import { mapMenuToRoutes } from "@/utils/mapMenuToRoutes";
import { getStorage, setStorage } from "@/utils/storage";

// export const useHomeStore = defineStore("home", {
//   state: () => ({
//     num: 100
//   }),

//   getters: {
//     getNum: (state) => {
//       return state.num;
//     }
//   },

//   actions: {
//     setNumber() {
//       this.num = 1000;
//     }
//   }
// });

export const useLoginStore = defineStore("login", () => {
  const token = ref("");
  const menus = ref([
    {
      path: "/main",
      name: "Main",
      children: [{ path: "/home", name: "Home" }]
    },
    {
      path: "/main",
      name: "Main",
      children: [
        { path: "/info", name: "Info" },
        {
          path: "/me",
          name: "Me"
        }
      ]
    }
  ]);

  const handleLogin = () => {
    console.log("登录成功");

    setStorage("TOKEN", "token");
    setStorage("MENUS", menus.value);

    // 动态添加路由
    const routes = mapMenuToRoutes(menus.value);

    routes.forEach((route) => {
      router.addRoute("Main", route);
    });

    router.push("/main");
  };

  const loadCache = () => {
    const TOKEN = getStorage("TOKEN");
    const MENUS = getStorage("MENUS");

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
