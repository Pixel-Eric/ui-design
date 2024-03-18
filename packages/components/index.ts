import Vue, { VueConstructor } from "vue";
import { Button } from "./src/button";

const components: Record<string, Vue> = { "cd-button": Button };

export default {
  install: (app: VueConstructor) => {
    for (const [key, component] of Object.entries(components)) {
      app.component(key, component);
    }
  },
};
