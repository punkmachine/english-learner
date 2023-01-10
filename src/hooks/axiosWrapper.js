import { alertHandlerHook } from '@/hooks/alertHandler';

function axiosWrapperHook() {
	const axios = inject('axios');

	const { errorHandler } = alertHandlerHook();

	function getData({ endpoint, thenCallback }) {
		axios
			.get(`${process.env.VUE_APP_API_URL}/${endpoint}`)
			.then(response => {
				thenCallback(response);
			})
			.catch(error => {
				errorHandler(error);
			});
	}

	function postData({ endpoint, request, thenCallback }) {
		axios
			.post(`${process.env.VUE_APP_API_URL}/${endpoint}`, request)
			.then(() => {
				thenCallback();
			})
			.catch(error => {
				errorHandler(error);
			});
	}

	function deleteData({ endpoint, thenCallback }) {
		axios
			.delete(`${process.env.VUE_APP_API_URL}/${endpoint}`)
			.then(() => {
				thenCallback();
			})
			.catch(error => {
				errorHandler(error);
			});
	}

	function patchData({ endpoint, request, thenCallback }) {
		axios
			.patch(`${process.env.VUE_APP_API_URL}/${endpoint}`, request)
			.then(() => {
				thenCallback();
			})
			.catch(error => {
				errorHandler(error);
			});
	}

	return {
		getData, postData, deleteData, patchData
	}
}

export { axiosWrapperHook };
