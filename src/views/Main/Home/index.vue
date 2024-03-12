<script setup>
// const obj1 = {};
// const obj2 = {};
// console.log("obj", obj1 === obj2);

// // 引用赋值
// const info = {
//   name: "zwj",
//   friend: {
//     name: "zzz"
//   }
// };
// const info1 = info.friend;
// info1.name = "cccccccccccc";
// console.log("info", info.friend, info1);

// // 值传递 这里的形参 会被赋值为传入的实参
// function test(a) {
//   a = 200;
// }

// const num = 100;
// test(num);
// console.log("num", num);

// // 引用传递
// function testA(a) {
//   a = {
//     name: "zzzz"
//   };
// }

// const info = {
//   name: "zwj"
// };
// testA(info);
// console.log("info", info);

// function testB(a) {
//   a.name = "zzzzzzz";
// }

// const info1 = {
//   name: "zwj"
// };
// testB(info1);
// console.log("info1", info1);

// ========================================================
// this: 情况一 普通函数被默认调用(this指向window,严格模式下指向undefined)
function foo(name, age) {
  // arguments.length 实参数量
  console.log("arguments", arguments, arguments.length);
  console.log("this1", this);
}
foo("zwj", 24);

// this: 情况二 函数被对象引用并且调用它(this指向这个对象)
const obj = {
  name: "obj",
  run: function () {
    console.log("obj this", this);
  }
};
obj.run();
const run = obj.run;
run();
</script>

<template>
  <h1>Home Page</h1>
</template>

<style lang="less" scoped></style>
