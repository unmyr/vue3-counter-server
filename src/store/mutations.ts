import { MutationTree } from "vuex";
import { IState } from "@/store/IState";

export const mutations: MutationTree<IState> = {
  setLoading(state, flag: boolean): void {
    state.isLoading = flag;
  },
  increment(state, num: number): void {
    state.count += num;
  },
};
