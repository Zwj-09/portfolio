<script setup>
import { MENUKEY } from "@/config/key";
import { getStorage } from "@/utils/storage";
import menuItem from "@/components/menu/index";
import myHeader from "@/components/Header/index";
import myFooter from "@/components/Footer/index";

const MENUS = ref(getStorage(MENUKEY) ? getStorage(MENUKEY) : []);
</script>

<template>
  <my-header />

  <div class="h-total-height bg-yellow-800">
    <div class="h-full flex overflow-hidden">
      <div class="w-60 bg-pink-800 overflow-y-auto">
        <v-list
          color="#2262FB"
          base-color="#8593A7"
          variant="text"
          open-strategy="single"
          nav
        >
          <menu-item :menus="MENUS" />
        </v-list>
      </div>

      <main class="flex-1 overflow-y-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>

  <my-footer />
</template>

<style lang="less" scoped></style>
