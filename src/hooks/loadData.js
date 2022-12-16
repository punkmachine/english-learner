import { ref } from 'vue';

function loadDataWrapperHook() {
	const loading = ref(false);

	async function loadData(callback) {
		loading.value = true;
		await callback();
		loading.value = false;
	}

	return {
		loading, loadData
	}
}

export { loadDataWrapperHook };