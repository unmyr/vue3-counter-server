import { expect } from 'chai'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

describe('actions', () => {
  it('increment action', (done) => {
    const state = {
      count: 0,
      isLoading: false
    }
    const commit = (fname, payload) => {
      mutations[fname](state, payload)
    }

    actions.increment({ commit, state }, 1)
    const timeBegin = new Date()
    const timeId = setInterval(
      () => {
        const timeNow = new Date()
        const elapsedTimeSec = Math.floor((timeNow - timeBegin) / 1000.0)
        if (state.isLoading && elapsedTimeSec < 3) {
          return
        }
        clearInterval(timeId)
        expect(state.isLoading).toBe(false)
        expect(state.count).toBe(1)
        done()
      },
      100
    )
  })
})
