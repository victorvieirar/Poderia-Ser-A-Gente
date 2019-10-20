import Vue from "vue";

import router from "./routes";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faPlus);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store
}).$mount("#app");
