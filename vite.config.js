import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dirs: ["./src/directive", "./src/api"],
      eslintrc: {
        enabled: true
      }
    })
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
    extensions: [".js", ".vue"]
  }
});
