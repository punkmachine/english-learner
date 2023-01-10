import { alertHandlerHook } from '@/hooks/alertHandler';

function tryCatchWrapperHook() {
	const { errorHandler } = alertHandlerHook();

	async function tryCatchWrapper(callback) {
		try {
			await callback();
		} catch (error) {
			errorHandler(error);
		}
	}

	return { tryCatchWrapper };
}

export { tryCatchWrapperHook };
