<script setup>
const info = {
  name: "info",
  age: 24,
  friend: {
    name: "Tom",
    age: 28,
    address: {
      city: "beijing",
      code: 128
    }
  },
  set: new Set(["abc", "abd", "abe"]),
  run: () => {
    console.log("run");
  },
  key: Symbol("abc"),
  [Symbol("s1")]: "111",
  [Symbol("s2")]: "222"
};

// info.obj = info; // 循环引用(JSON深拷贝会报错)

// ============================================================
// 引用赋值(指向同一个堆内存)
// const info2 = info;
// console.log("info2", info2);

// // 浅拷贝(只拷贝第一层，第二层还是引用赋值 如果拷贝的数据里面还有对象、数组这些的话 就只是拷贝引用地址 数据还是会跟着一起变化的)
// // const info3 = { ...info };
// const info3 = Object.assign({}, info);
// info.name = "asdasd";
// info.friend.name = "aaaaaaa";
// console.log("info3", info, info3);
// ============================================================
// 深拷贝(拷贝所有层级)
// info.name = "zcasca";
// // 先转换成字符串 然后将字符串解析成对象(JSON.parse 会创建一个全新的对象,无法处理特殊数据(函数、Symbol等))
// const info4 = JSON.parse(JSON.stringify(info));
// info4.name = "zzzzzz";
// info.friend.name = "ccccccccccccccccccc";
// console.log("info4", info, info4);

function isObject(value) {
  // null -> object 不希望是null object、array -> object function -> function
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

// 自定义深拷贝
function cloneData(obj, isDeep = true, map = new WeakMap()) {
  // 如果是Symbol 直接返回
  if (typeof obj === "symbol") {
    return Symbol(obj.description);
  }

  // 如果是原始类型 直接返回
  if (!isObject(obj)) {
    return obj;
  }

  // 处理 Set 类型
  if (obj instanceof Set) {
    const newSet = new Set();
    for (const item of obj) {
      newSet.add(cloneData(item, isDeep, map));
    }
    return newSet;
  }

  // 函数类型
  if (typeof obj === "function") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  // 如果是对象创建空对象 如果是数组创建空数组
  const newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);
  for (const key in obj) {
    // 原始值 直接赋值 对象需要递归处理
    newObj[Symbol(key.description)] = isDeep
      ? cloneData(obj[key], isDeep, map)
      : obj[key];
  }

  // 遍历Symbol
  const symbolKeys = Object.getOwnPropertySymbols(obj);
  for (const key of symbolKeys) {
    newObj[key] = isDeep ? cloneData(obj[key], isDeep, map) : obj[key];
  }
  return newObj;
}

const books = [
  { name: "js1", price: 30 },
  { name: "js2", price: 20 },
  { name: "js3", price: 300 }
];

const newBooks = cloneData(books, true);
console.log("newBooks", newBooks);

info.self = info;
const newInfo = cloneData(info, true);
console.log("info", info);
console.log("newInfo", newInfo.key === info.key);
// ============================================================
</script>

<template>
  <h1>Vue Page</h1>
</template>

<style lang="less" scoped></style>
