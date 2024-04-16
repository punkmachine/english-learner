import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import StatisticsPage from '@/pages/StatisticsPage.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsPage,
    },
  ],
});

export default router;
