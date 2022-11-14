import { createStore } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const state = {

};

export default createStore({
	state,
	getters,
	actions,
	mutations,
});