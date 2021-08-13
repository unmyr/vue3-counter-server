import { createStore } from "vuex";
import { CounterState } from "@/store/types";
import { mutations } from "@/store/mutations";
import actions from "@/store/actions";

export const store = createStore<CounterState>({
  state: {
    count: 0,
    isLoading: false,
  },
  mutations,
  actions,
  modules: {},
});
