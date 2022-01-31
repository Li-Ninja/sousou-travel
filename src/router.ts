import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('/src/pages/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;