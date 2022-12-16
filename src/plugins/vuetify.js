import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const elTheme = {
	dark: false,
	colors: {
		primary: '#1E88E5',
	}
};

export default createVuetify({
	theme: {
		defaultTheme: 'elTheme',
		themes: {
			elTheme,
		}
	}
});