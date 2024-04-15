import { createRouter, createWebHistory } from "vue-router";

import BlogPage from "./pages/BlogPage.vue";
import HomePage from "./pages/HomePage.vue";
import PageDetails from "./pages/PageDetails.vue";

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
      name: "projects.index",
      component: BlogPage,
    },
    {
      path: "/project/:id",
      name: "projects.show",
      component: PageDetails,
    },
  ],
});

export { router };
