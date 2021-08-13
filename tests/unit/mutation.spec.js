import { mutations } from "@/store/mutations";

const { increment, setLoading } = mutations;

describe("mutation of Counter", () => {
  it("increment", () => {
    const state = { count: 0 };

    increment(state, 1);
    expect(state.count).toBe(1);

    increment(state, -1);
    expect(state.count).toBe(0);
  });

  it("setLoading", () => {
    const state = { isLoading: 0 };
    setLoading(state, true);
    expect(state.isLoading).toBe(true);
    setLoading(state, false);
    expect(state.isLoading).toBe(false);
  });
});
