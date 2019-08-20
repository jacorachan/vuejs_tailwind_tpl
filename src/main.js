import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#emptytpl");
