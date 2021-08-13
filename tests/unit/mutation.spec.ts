import { expect } from "chai";
import { mutations } from "@/store/mutations";

const { increment, setLoading } = mutations;

describe("mutation of Counter", () => {
  it("increment", () => {
    const state = {
      count: 0,
      isLoading: false,
    };

    increment(state, 1);
    expect(state.count).to.equal(1);

    increment(state, -1);
    expect(state.count).to.equal(0);
  });

  it("setLoading", () => {
    const state = {
      count: 0,
      isLoading: false,
    };

    setLoading(state, true);
    expect(state.isLoading).to.equal(true);
    setLoading(state, false);
    expect(state.isLoading).to.equal(false);
  });
});
