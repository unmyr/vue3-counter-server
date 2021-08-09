export default {
  increment ({ commit }: any, param: number): void {
    commit('setLoading', true)
    setTimeout(
      () => {
        commit('increment', param)
        commit('setLoading', false)
      },
      500
    )
  }
}
