import { expect } from 'chai'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import { IState } from '@/store/IState'

/* eslint-disable  @typescript-eslint/no-explicit-any */
type MutationFunction = (state: IState, payload: any) => void;

describe('actions', () => {
  it('increment action', (done) => {
    const state = {
      count: 0,
      isLoading: false
    }
    const mutationsFnMap: { [K: string]: MutationFunction } = {
      setLoading: mutations.setLoading,
      increment: mutations.increment
    }
    const commit = (funcName: string, payload: any) => {
      mutationsFnMap[funcName](state, payload)
    }

    actions.increment({ commit, state }, 1)
    const timeBegin = new Date()
    const timeId = setInterval(
      () => {
        const timeNow = new Date()
        const elapsedTimeSec = Math.floor((timeNow.getTime() - timeBegin.getTime()) / 1000.0)
        if (state.isLoading && elapsedTimeSec < 3) {
          return
        }
        clearInterval(timeId)
        expect(state.isLoading).to.equal(false)
        expect(state.count).to.equal(1)
        done()
      },
      100
    )
  })
})
