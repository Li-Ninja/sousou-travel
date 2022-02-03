import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { MenuKeyEnum } from '@/enum/menu.enum';
import Container from '@/components/global/Container.vue';

const Activity = () => import('/src/pages/Activity.vue');
const Home = () => import('/src/pages/Home.vue');
const Hotel = () => import('/src/pages/Hotel.vue');
const Restaurant = () => import('/src/pages/Restaurant.vue');
const Schedule = () => import('/src/pages/Schedule.vue');
const Spot = () => import('/src/pages/Spot.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Container,
    redirect: { name: MenuKeyEnum.Home },
    children: [
      {
        path: MenuKeyEnum.Home.toLowerCase(),
        name: MenuKeyEnum.Home,
        component: Home
      },
      {
        path: MenuKeyEnum.Activity.toLowerCase(),
        name: MenuKeyEnum.Activity,
        component: Activity
      },
      {
        path: MenuKeyEnum.Hotel.toLowerCase(),
        name: MenuKeyEnum.Hotel,
        component: Hotel
      },
      {
        path: MenuKeyEnum.Restaurant.toLowerCase(),
        name: MenuKeyEnum.Restaurant,
        component: Restaurant
      },
      {
        path: MenuKeyEnum.Schedule.toLowerCase(),
        name: MenuKeyEnum.Schedule,
        component: Schedule
      },
      {
        path: MenuKeyEnum.Spot.toLowerCase(),
        name: MenuKeyEnum.Spot,
        component: Spot
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
