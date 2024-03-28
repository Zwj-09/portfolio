import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";
export const vuetify = createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa
    }
  }
});
