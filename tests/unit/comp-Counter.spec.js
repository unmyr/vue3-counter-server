import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders count-view when passed', () => {
    const step = 1
    const wrapper = shallowMount(Counter, {
      propsData: { step }
    })
    expect(wrapper.vm.count).toBe(0)
  })
})
