import { createApp } from "vue";
import App from "@/App.vue";
import "normalize.css";
import "@/assets/css/index.less";
import router from "@/router";
import { registerDirective } from "@/directives";
import pinia from "@/store";

import "vuetify/styles";
import { createVuetify } from "vuetify";
const vuetify = createVuetify({});

const app = createApp(App);
registerDirective(app);

app.use(pinia).use(router).use(vuetify).mount("#app");
