import { createStore } from 'vuex';

import main from './modules/main';
import dictionary from './modules/dictionary';
import statistics from './modules/statistics';
import tests from './modules/tests';

export default createStore({
	modules: {
		main,
		dictionary,
		statistics,
		tests,
	},
});
