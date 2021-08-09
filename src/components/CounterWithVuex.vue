<template>
  <div class="counter-with-vuex">
    <button name="plus" :disabled="isLoading" @click="syncIncrement(step)">
      +{{ step }}
    </button>
    <button
      name="minus"
      :disabled="isLoading"
      @click="asyncIncrement(step * -1)"
    >
      -{{ step }}
    </button>
    <div v-if="isLoading">Now loading...</div>
    <div v-else id="count-view" class="count-area">{{ count }}</div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { useStore } from "vuex";
  import { key } from "@/store";

  export default defineComponent({
    name: "CounterWithVuex",
    props: {
      step: {
        type: Number,
        required: true,
      },
    },
    setup() {
      const store = useStore(key);

      return {
        // access a state in computed function
        count: computed(() => store.state.count),
        isLoading: computed(() => store.state.isLoading),
        // access a mutation
        syncIncrement: (num: number) => store.commit("increment", num),
        // access a action
        asyncIncrement: (num: number) => store.dispatch("increment", num),
      };
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .count-area {
    color: blueviolet;
  }
</style>
