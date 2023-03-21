import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import BlogsPage from '../components/BlogsPage.vue';
import NewsPage from '../components/NewsPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/blogs',
    component: BlogsPage
  },
  {
    path: '/news',
    component: NewsPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;