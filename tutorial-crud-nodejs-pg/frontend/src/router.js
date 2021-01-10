import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routings = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialList"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/TutorialDetail"),
  },
  {
    path: "/add",
    name: "add-tutorial",
    component: () => import("./components/AddTutorial"),
  },
];

export default new Router({
  mode: "history",
  routes: routings,
});
