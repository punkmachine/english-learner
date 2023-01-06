import { onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import typesAlert from '@/constants/typesAlert';

function errorHandlerHook() {
	const store = useStore();

	let timerErrorHide = null;

	function errorHandler(error) {
		store.dispatch('changeAlertData', {
			text: error.code,
			type: typesAlert.error,
		});

		timerErrorHide = setTimeout(() => {
			store.dispatch('removeAlertData');
			clearTimeout(timerErrorHide);
		}, 3000);
	}

	onBeforeUnmount(() => {
		clearTimeout(timerErrorHide);
	});

	return { errorHandler };
}

export { errorHandlerHook };
