import Vue from "vue";
import router from "./router"
import App from "./App";

import "../public/css/reset.css";
import './plugins/element.js'
Vue.config.ProductionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
