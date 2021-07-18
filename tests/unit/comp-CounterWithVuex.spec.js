import { mount } from '@vue/test-utils'
import CounterWithVuex from '@/views/CounterWithVuex.vue'
import mutations from '@/store/mutations.ts'
import { key } from '@/store'

describe('CounterWithVuex.vue', () => {
  const mockActions = {
    increment ({ commit }, param) {
      commit('increment', param)
      commit('setLoading', false)
    }
  }

  it('should render increment', async () => {
    const state = {
      count: 0,
      isLoading: false
    }
    const commit = (fname, payload) => {
      mutations[fname](state, payload)
    }
    const dispatch = (fname, payload) => {
      mockActions[fname]({ commit }, payload)
    }

    const step = 1
    const wrapper = mount(CounterWithVuex, {
      global: {
        provide: {
          [key]: {
            state,
            mutations,
            actions: mockActions,
            commit: commit,
            dispatch: dispatch
          }
        }
      },
      props: { step }
    })
    expect(state.count).toBe(0)
    await wrapper.find("button[name='plus']").trigger('click')
    expect(state.count).toBe(1)
    expect(state.isLoading).toBe(false)
  })

  it('should render decrement', async () => {
    const state = {
      count: 0,
      isLoading: false
    }
    const commit = (fname, payload) => {
      mutations[fname](state, payload)
    }
    const dispatch = (fname, payload) => {
      mockActions[fname]({ commit }, payload)
    }
    const step = 1
    const wrapper = mount(CounterWithVuex, {
      global: {
        provide: {
          [key]: {
            state,
            mutations,
            actions: mockActions,
            commit: commit,
            dispatch: dispatch
          }
        }
      },
      props: { step }
    })
    expect(state.count).toBe(0)
    await wrapper.find("button[name='minus']").trigger('click')
    expect(state.count).toBe(-1)
    expect(state.isLoading).toBe(false)
  })
})
