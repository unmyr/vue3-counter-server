import { MutationTree } from "vuex";
import { CounterState } from "@/store/types";

export const mutations: MutationTree<CounterState> = {
  setLoading(state, flag: boolean): void {
    state.isLoading = flag;
  },
  increment(state, num: number): void {
    state.count += num;
  },
};
