import Vue from "vue";
import App from "./src/App";
import CDesgin from "@cc-design/components";

Vue.use(CDesgin);

const app = new Vue({
  render: (h) => h(App),
});

app.$mount("#app");
