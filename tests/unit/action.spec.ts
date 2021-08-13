import { Commit, MutationTree } from "vuex";
import { expect } from "chai";
import { mutations } from "@/store/mutations";
import actions from "@/store/actions";
import { IState } from "@/store/CounterState";

describe("actions", () => {
  const mutationFnMap: MutationTree<IState> = {
    setLoading: mutations.setLoading,
    increment: mutations.increment,
  };

  it("increment action", (done) => {
    const state: IState = {
      count: 0,
      isLoading: false,
    };

    const commit: Commit = (funcName: string, payload: any) => {
      if (mutationFnMap[funcName]) {
        mutationFnMap[funcName](state, payload);
      }
    };

    actions.increment({ commit }, 1);
    const timeBegin = new Date();
    const timeId = setInterval(() => {
      const timeNow = new Date();
      const elapsedTimeSec = Math.floor(
        (timeNow.getTime() - timeBegin.getTime()) / 1000.0
      );
      if (state.isLoading && elapsedTimeSec < 3) {
        return;
      }
      clearInterval(timeId);
      expect(state.isLoading).to.equal(false);
      expect(state.count).to.equal(1);
      done();
    }, 100);
  });
});
