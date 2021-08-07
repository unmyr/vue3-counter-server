import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('test increment method', async () => {
    const step = 1
    const wrapper = shallowMount(Counter, {
      props: { step }
    })
    expect(wrapper.vm.count).toBe(0)
    wrapper.vm.increment(2)
    expect(wrapper.vm.count).toBe(2)
  })

  it('click plus button', async () => {
    const step = 1
    const wrapper = shallowMount(Counter, {
      props: { step }
    })
    expect(wrapper.vm.count).toBe(0)
    await wrapper.find("button[name='plus']").trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  it('click minus button', async () => {
    const step = 1
    const wrapper = shallowMount(Counter, {
      props: { step }
    })
    expect(wrapper.vm.count).toBe(0)
    await wrapper.find("button[name='minus']").trigger('click')
    expect(wrapper.vm.count).toBe(-1)
  })
})
