import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const state = {
	language: localStorage.getItem('lang') || 'ru',
};

export default {
	state,
	getters,
	actions,
	mutations,
};