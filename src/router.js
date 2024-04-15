import { createRouter, createWebHistory } from "vue-router";

import BlogPage from "./pages/BlogPage.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
  ],
});

export { router };
