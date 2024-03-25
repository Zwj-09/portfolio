import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
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
  },

  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
