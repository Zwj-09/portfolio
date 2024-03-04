import { createPinia } from "pinia";
import { useLoginStore } from "./Login";

const pinia = createPinia();

function registerPinia(app) {
  app.use(pinia);
  const loginStore = useLoginStore();
  loginStore.loadCache();
}
export default registerPinia;
