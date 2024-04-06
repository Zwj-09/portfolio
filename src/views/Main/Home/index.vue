<script setup>
import { cutFile } from "@/utils/cutFile";
const fileRef = ref(null);
const fileChange = async (e) => {
  const file = e.target.files[0];
  console.time("cutFile");
  const chunk = await cutFile(file);
  console.timeEnd("cutFile");
  console.log("chunk", chunk);
};
</script>

<template>
  <v-btn>首页</v-btn>
  <input type="file" ref="fileRef" @change="fileChange" />
</template>

<style lang="less" scoped></style>
