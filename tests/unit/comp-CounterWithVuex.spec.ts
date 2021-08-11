import { Commit } from "vuex";
import { expect } from "chai";
import { mount } from "@vue/test-utils";
import CounterWithVuex from "@/views/CounterWithVuex.vue";
import mutations from "@/store/mutations";
import { key } from "@/store";
import { IState } from "@/store/IState";

type IMutation = (state: IState, payload: any) => void;
type IAction = (params: { commit: Commit }, payload: any) => void;

describe("CounterWithVuex.vue (TypeScript)", () => {
  const mockActions = {
    increment(params: { commit: Commit }, payload: any) {
      params.commit("increment", payload);
      params.commit("setLoading", false);
    },
  };

  const actionFnMap: { [K: string]: IAction } = {
    increment: mockActions.increment,
  };

  const mutationFnMap: { [K: string]: IMutation } = {
    increment: mutations.increment,
    setLoading: mutations.setLoading,
  };

  it("should render increment", async () => {
    const state: IState = {
      count: 0,
      isLoading: false,
    };

    const commit: Commit = (funcName: string, payload: any) => {
      if (mutationFnMap[funcName]) {
        mutationFnMap[funcName](state, payload);
      }
    };

    const dispatch = (funcName: string, payload: number) => {
      if (actionFnMap[funcName]) {
        actionFnMap[funcName]({ commit }, payload);
      }
    };

    const step = 1;
    const wrapper = mount(CounterWithVuex, {
      global: {
        provide: {
          [key as symbol]: {
            state,
            mutations,
            actions: mockActions,
            commit: commit,
            dispatch: dispatch,
          },
        },
      },
      props: { step },
    });

    expect(state.count).to.equal(0);
    await wrapper.find("button[name='plus']").trigger("click");
    expect(state.count).to.equal(1);
    expect(state.isLoading).to.equal(false);
  });

  it("should render decrement", async () => {
    const state: IState = {
      count: 0,
      isLoading: false,
    };

    const commit: Commit = (funcName: string, payload: any) => {
      if (mutationFnMap[funcName]) {
        mutationFnMap[funcName](state, payload);
      }
    };

    const dispatch = (funcName: string, payload: number) => {
      if (actionFnMap[funcName]) {
        actionFnMap[funcName]({ commit }, payload);
      }
    };

    const step = 1;
    const wrapper = mount(CounterWithVuex, {
      global: {
        provide: {
          [key as symbol]: {
            state,
            mutations,
            actions: mockActions,
            commit: commit,
            dispatch: dispatch,
          },
        },
      },
      props: { step },
    });

    expect(state.count).to.equal(0);
    await wrapper.find("button[name='minus']").trigger("click");
    expect(state.count).to.equal(-1);
    expect(state.isLoading).to.equal(false);
  });
});