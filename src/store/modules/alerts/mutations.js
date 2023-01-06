export const mutations = {
	setVisible(state, isVisible) {
		state.isVisible = isVisible;
	},
	setAlertData(state, { text, type }) {
		state.text = text;
		state.type = type;
	},
};
