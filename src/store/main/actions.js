export const actions = {
	changeLanguage({ commit }, newLang) {
		commit('setLanguage', newLang);
		localStorage.setItem('lang', newLang);
	},
};
