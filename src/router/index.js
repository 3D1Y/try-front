import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

//console.dir(Router);
const push = Router.prototype.push;
Router.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    console.log("index.js", this);
    return push.call(this,location, onComplete, onAbort);
  }
  return push.call(this,location, onComplete, () => {});
};
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "register",
      path: "/register",
      component: Register,
    },
    {
      name: "search",
      path: "/search/:xxx?",
      component: Search,
    },
  ],
});
