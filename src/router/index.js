import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import How from '../views/how.vue';
import Customer from '../views/customer.vue';
import Downloads from '../views/Downloads.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      pageTitle: '홈',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      pageTitle: '데일리세탁',
    },
  },
  {
    path: '/how',
    name: 'how',
    component: How,
    meta: {
      pageTitle: '이용안내',
    },
  },
  {
    path: '/customer',
    name: 'customer',
    component: Customer,
    meta: {
      pageTitle: '자주묻는 질문',
    },
  },
  {
    path: '/downloads',
    name: 'download',
    component: Downloads,
  },
  {
    path: '*',
    name: 'Not-Found',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
