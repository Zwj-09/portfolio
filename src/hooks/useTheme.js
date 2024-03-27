import { THEMEKEY } from "@/config/key";
import { getStorage, setStorage } from "@/utils/storage";
import { watchEffect } from "vue";

const match = window.matchMedia("(prefers-color-scheme: dark)");

const theme = ref(getStorage(THEMEKEY) || "light");

const followOS = () => {
  if (match.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

watchEffect(() => {
  setStorage(THEMEKEY, theme.value);

  if (theme.value === "OS") {
    followOS();
    match.addEventListener("change", (e) => {
      theme.value = e.matches ? "dark" : "light";
    });
  } else {
    document.documentElement.setAttribute("data-theme", theme.value);
    //   document.documentElement.dataset.theme = theme.value;
    match.removeEventListener("change", (e) => {
      theme.value = e.matches ? "dark" : "light";
    });
  }
});

export const useTheme = () => {
  return theme;
};
