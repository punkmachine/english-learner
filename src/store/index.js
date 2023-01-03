import { createStore } from 'vuex';

import main from './main';
import dictionary from './dictionary';
import statistics from './statistics';
import tests from './tests';

export default createStore({
	modules: {
		main,
		dictionary,
		statistics,
		tests,
	},
});
