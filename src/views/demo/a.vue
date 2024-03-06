<script setup>
import bComp from "./b.vue";

const childRef = ref(null);
const parentClick = (value) => {
  console.log("value", value, childRef.value);
  childRef.value.testFn();
};

const test = () => {
  console.log("aaa");
};

const message = ref("Hello World");

defineExpose({
  message
});
</script>

<template>
  <h1>第一级组件</h1>

  <b-comp
    @click="test"
    ref="childRef"
    class="child"
    @handle-click="parentClick"
    test-attr="attrs"
    :info="{
      name: 'zwj'
    }"
  />
</template>

<style lang="less" scoped></style>
