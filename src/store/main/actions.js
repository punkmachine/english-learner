export const actions = {
	changeLanguage({ state, commit }, newLang) {
		commit('setLanguage', newLang);
		localStorage.setItem('lang', newLang);
	}
};