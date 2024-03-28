import { createApp } from "vue";
import App from "@/App.vue";
import "normalize.css";
import "@/assets/css/index.less";
import router from "@/router";
import { registerDirective } from "@/directives";
import pinia from "@/store";
import { vuetify } from "@/plugins/vuetify";

const app = createApp(App);
registerDirective(app);

app.use(pinia).use(router).use(vuetify).mount("#app");
