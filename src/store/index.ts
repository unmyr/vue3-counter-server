import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { CounterState } from "@/store/CounterState";
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

export const key: InjectionKey<Store<CounterState>> = Symbol("global store");
