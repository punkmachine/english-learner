import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/statistics',
		name: 'statistics',
		component: () => import(/* webpackChunkName: "statistics" */ '../pages/StatisticsPage.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import(/* webpackChunkName: "test" */ '../pages/TestPage.vue')
	},
	{
		path: '/dictionary',
		name: 'dictionary',
		component: () => import(/* webpackChunkName: "dictionary" */ '../pages/DictionaryPage.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;