import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from '@/App.vue';

import router from '@/router';
import store from '@/store';

import vuetify from '@/plugins/vuetify';
import { loadFonts } from '@/plugins/webfontloader';

import en from '@/locales/en';
import ru from '@/locales/ru';

loadFonts();

const app = createApp(App);

const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem('lang') || 'ru',
	fallbackLocale: 'en',
	messages: {
		ru,
		en
	}
});

app.use(i18n)
	.use(router)
	.use(store)
	.use(vuetify)
	.use(VueAxios, axios)
	.provide('axios', app.config.globalProperties.axios)
	.mount('#app');