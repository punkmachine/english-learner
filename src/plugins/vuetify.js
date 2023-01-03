import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const elTheme = {
	dark: false,
	colors: {
		primary: '#1E88E5',
		ultraDark: '#2B2B2B',
		dark: '#3F3F3F',
		mainLightColor: '#f3f3f3',
	},
};

export default createVuetify({
	theme: {
		defaultTheme: 'elTheme',
		themes: {
			elTheme,
		},
	},
});
