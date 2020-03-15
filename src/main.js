import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 按需引入 vantUI
import "@/plugins/vantUI.js";
import "@/style/index.scss"; // glob scss

import "@u/rem.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
