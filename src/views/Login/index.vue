<template>
  <h1>Login Page</h1>
  <button @click="btnClick">登录</button>
</template>

<script setup>
import { useLoginStore } from "@/store/Login";

const loginStore = useLoginStore();

const btnClick = () => {
  loginStore.handleLogin();
};
</script>

<style lang="less" scoped></style>
useLoginStore,
