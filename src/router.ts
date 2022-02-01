import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { MenuKeyEnum } from '@/enum/menu.enum';
import Container from '@/components/global/Container.vue';

const Home = () => import('/src/pages/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Container,
    redirect: { name: MenuKeyEnum.Home },
    children: [
      {
        path: '',
        name: MenuKeyEnum.Home,
        component: Home
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
