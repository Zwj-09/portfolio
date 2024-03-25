<script setup>
import { MENUKEY } from "@/config/key";
import { getStorage } from "@/utils/storage";
import menuItem from "@/components/menu/index";

const MENUS = ref(getStorage(MENUKEY) ? getStorage(MENUKEY) : []);
</script>

<template>
  <header class="w-screen h-14 bg-red-400">{{ MENUS }}</header>

  <div class="flex" :style="{ height: 'calc(100vh - 56px)' }">
    <aside class="custom-scrollbar w-52 bg-teal-500 overflow-y-auto">
      <v-list
        active-color="#2262FB"
        base-color="#8593A7"
        variant="text"
        open-strategy="single"
        nav
      >
        <menu-item :menus="MENUS" />
      </v-list>
    </aside>
    <div class="flex-1 bg-orange-400">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
