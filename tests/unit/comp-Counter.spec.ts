import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("test increment method", async () => {
    const step = 2;
    const wrapper = shallowMount(Counter, {
      props: { step },
    });
    expect(wrapper.vm.count).to.equal(0);
    wrapper.vm.increment(step);
    expect(wrapper.vm.count).to.equal(step);
  });

  it("click plus button", async () => {
    const step = 1;
    const wrapper = shallowMount(Counter, {
      props: { step },
    });
    expect(wrapper.vm.count).to.equal(0);
    await wrapper.find("button[name='plus']").trigger("click");
    expect(wrapper.vm.count).to.equal(1);
  });

  it("click minus button", async () => {
    const step = 1;
    const wrapper = shallowMount(Counter, {
      props: { step },
    });
    expect(wrapper.vm.count).to.equal(0);
    await wrapper.find("button[name='minus']").trigger("click");
    expect(wrapper.vm.count).to.equal(-1);
  });
});
