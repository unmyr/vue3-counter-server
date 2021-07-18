import { IState } from '@/store/IState'

export default {
  setLoading (state: IState, flag: boolean): void {
    state.isLoading = flag
  },
  increment (state: IState, num: number): void {
    state.count += num
  }
}
