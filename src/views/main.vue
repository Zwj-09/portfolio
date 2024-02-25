<script setup></script>

<template>
  <h1 class="text-red-500">{{ $translate("greetings.hello") }}</h1>
  <button v-permission="'add'">新增</button>
  <button v-permission="'del'">减少</button>
  <button v-permission="'deldel'">编辑</button>
</template>

<style lang="less" scoped></style>
