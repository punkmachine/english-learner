import { mount } from '@vue/test-utils';
import Chip from '@/components/shared/Chip.vue';

describe('Chip.vue', () => {
	it('render chip', () => {
		const wrapper = mount(Chip);

		expect(wrapper).toBeTruthy();
	});
});
