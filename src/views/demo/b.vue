<script setup>
import c1Comp from "./c1.vue";
import c2Comp from "./c2.vue";

const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
});
const emits = defineEmits(["handleClick"]);
const btClick = (parent) => {
  emits("handleClick", 1111);
  console.log("message", parent);
};

// defineOptions({
//   inheritAttrs: false
// });

const testFn = () => {
  console.log("test");
};

defineExpose({
  testFn
});
</script>

<template>
  <!-- <div class="self"> -->
  <h2>第二级组件</h2>

  <button @click="btClick($parent)">这里是父组件传的值</button>

  <br />
  {{ $attrs }}
  <span>
    {{ props }}
  </span>
  <br />

  <c1-comp />
  <c2-comp />
  <!-- </div> -->
</template>

<style lang="less" scoped></style>
