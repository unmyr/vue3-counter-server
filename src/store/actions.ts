import { Commit } from "vuex";

export default {
  increment({ commit }: { commit: Commit }, param: number): void {
    commit("setLoading", true);
    setTimeout(() => {
      commit("increment", param);
      commit("setLoading", false);
    }, 500);
  },
};
