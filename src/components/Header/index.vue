<script setup>
import { useTheme } from "@/hooks/useTheme";
import { clearStorage } from "../../utils/storage";
import { useRouter } from "vue-router";

const theme = useTheme();

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
const followOS = () => {
  theme.value = "OS";
};

const router = useRouter();
const btnClick = () => {
  clearStorage();

  router.push("/login");
};
</script>

<template>
  <div
    class="h-header-height hover:cursor-pointer bg-theme-bgc text-theme-text flex items-center justify-between px-10"
  >
    <div>asdasd</div>
    <div>
      <button @click="toggleTheme">按钮</button>
      <button @click="followOS">跟随系统</button>

      <i class="fa-solid fa-power-off" @click="btnClick"></i>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
