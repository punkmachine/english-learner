import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

import typesAlert from '@/constants/typesAlert';

const state = {
	isVisible: false,
	text: '',
	type: typesAlert.info,
};

export default {
	state,
	getters,
	actions,
	mutations,
};
