import { useStore } from 'vuex';
import typesAlert from '@/constants/typesAlert';

function alertHandlerHook() {
	const store = useStore();

	function alertHandler(text, type) {
		let timerId = null;
		store.dispatch('changeAlertData', { text, type });

		timerId = setTimeout(() => {
			store.dispatch('removeAlertData');
			clearTimeout(timerId);
		}, 3000);
	}

	function errorHandler(error) {
		if (typeof error === 'string') {
			alertHandler(error, typesAlert.error);

			return;
		}

		alertHandler(error.code, typesAlert.error);
	}

	function successHandler(text) {
		alertHandler(text, typesAlert.success);
	}

	return { errorHandler, successHandler };
}

export { alertHandlerHook };
