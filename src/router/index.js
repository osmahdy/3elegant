import { createRouter, createWebHistory } from 'vue-router';
import signUpPage from '../views/signUpPage.vue';
import loginpPage from '../views/loginPage.vue';
import homePage from '@/views/homePage.vue';
import sportShop from '@/views/sportShop.vue';
import clothesShop from '@/views/clothesShop.vue';
import electronicShop from '@/views/electronicShop.vue';
const routes = [
  {
    path: '/',
    name: 'login',
    component: loginpPage,
    meta: { hideNavbar: true },
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUpPage,
    meta: { hideNavbar: true },
  },
  {
    path: '/home',
    name: 'homePage',
    component: homePage,
    meta: { hideNavbar: false },
  },
  {
    path: '/sportShop',
    name: 'Sport',
    component: sportShop,
    meta: { hideNavbar: false },
  },
  {
    path: '/clothesShop',
    name: 'clothes',
    component: clothesShop,
    meta: { hideNavbar: false },
  },
  {
    path: '/electronicShop',
    name: 'electronic',
    component: electronicShop,
    meta: { hideNavbar: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
