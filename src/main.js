import { createApp } from "vue";
import App from "@/App.vue";
import "normalize.css";
import "@/assets/css/index.less";
import router from "@/router";
import { registerDirective } from "@/directives";
import pinia from "@/store/index";

import { myPlugin } from "@/plugins/myPlugin";

const app = createApp(App);
registerDirective(app);

app
  .use(myPlugin, {
    greetings: {
      hello: "Bonjour!"
    }
  })
  .use(pinia)
  .use(router)
  .mount("#app");
