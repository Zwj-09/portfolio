<script setup>
import { computed } from "vue";
defineOptions({
  name: "menuItem"
});

const props = defineProps({
  menus: {
    type: Array,
    default: () => []
  }
});

const asideMenu = computed(() => props.menus);
</script>

<template>
  <template v-for="menu in asideMenu" :key="menu.path">
    <v-list-group v-if="menu.children && menu.children.length">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" :title="menu.name"></v-list-item>
      </template>
      <menu-item :menus="menu.children"></menu-item>
    </v-list-group>
    <v-list-item v-else :to="menu.path" :title="menu.name"></v-list-item>
  </template>
</template>

<style lang="less" scoped></style>
