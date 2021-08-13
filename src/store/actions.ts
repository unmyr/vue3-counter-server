import { Commit, ActionTree } from "vuex";
import { CounterState } from "@/store/types";

export default <ActionTree<CounterState, any>>{
  increment({ commit }: { commit: Commit }, param: number): void {
    commit("setLoading", true);
    setTimeout(() => {
      commit("increment", param);
      commit("setLoading", false);
    }, 500);
  },
};
