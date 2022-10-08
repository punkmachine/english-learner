import { createApp } from 'vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue';

import router from './router';
import store from './store';

import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts()

const app = createApp(App);

app.use(router)
	.use(store)
	.use(vuetify)
	.use(VueAxios, axios)
	.provide('axios', app.config.globalProperties.axios)
	.mount('#app');