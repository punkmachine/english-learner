import typesAlert from '@/constants/typesAlert';

export const actions = {
	toggleVisible({ state, commit }) {
		commit('setVisible', !state.isVisible);
	},
	changeAlertData({ commit, dispatch }, data) {
		const { text, type } = data;

		if (text && type) {
			commit('setAlertData', data);
			dispatch('toggleVisible');
		}
	},
	removeAlertData({ commit, dispatch }) {
		commit('setAlertData', {
			text: '',
			type: typesAlert.info,
		});
		dispatch('toggleVisible');
	},
};
