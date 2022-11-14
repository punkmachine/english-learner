import { createStore } from 'vuex';

import dictionary from './dictionary';
import statistics from './statistics';
import tests from './tests';

export default createStore({
	modules: {
		dictionary,
		statistics,
		tests
	}
});