import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { IState } from "@/store/IState";
import { mutations } from "@/store/mutations";
import actions from "@/store/actions";

export const store = createStore<IState>({
  state: {
    count: 0,
    isLoading: false,
  },
  mutations,
  actions,
  modules: {},
});

export const key: InjectionKey<Store<IState>> = Symbol("global store");
