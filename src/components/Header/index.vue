<script setup>
import { useTheme } from "@/hooks/useTheme";

const theme = useTheme();

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
const followOS = () => {
  theme.value = "OS";
};
</script>

<template>
  <div
    class="h-header-height hover:cursor-pointer bg-theme-bgc text-theme-text"
  >
    <button @click="toggleTheme">按钮</button>
    <button @click="followOS">跟随系统</button>

    {{ theme }}
  </div>
</template>

<style lang="less" scoped></style>
