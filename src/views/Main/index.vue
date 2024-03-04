<script setup></script>

<template>
  <aside>侧边栏</aside>
  <main>
    <header>
      标题

      <router-link to="/home">Home</router-link>
      <router-link to="/me">Me</router-link>
      <router-link to="/info">Info</router-link>
      <router-link to="/test">Test</router-link>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="less" scoped></style>
