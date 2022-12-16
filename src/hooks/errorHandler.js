import { ref, onBeforeUnmount } from 'vue';

function errorHandlerHook() {
	const errorData = ref({
		visible: false,
		status: null,
	});

	let timerErrorHide = null;

	function errorHandler(error) {
		errorData.value = {
			visible: true,
			status: error.response.status
		};

		timerErrorHide = setTimeout(() => {
			errorData.value = {
				visible: false,
				status: ''
			};

			clearTimeout(timerErrorHide);
		}, 3000);
	}

	onBeforeUnmount(() => {
		clearTimeout(timerErrorHide);
	});

	return { errorData, errorHandler };
}

export { errorHandlerHook };