<template>
  <div class="counter">
    <button name="plus" :disabled="isLoading"
     v-on:click="increment(step)"
    >+{{ step }}</button>
    <button name="minus" :disabled="isLoading"
     v-on:click="increment(step * -1)"
    >-{{ step }}</button>
    <div v-if="isLoading">Now loading...</div>
    <div v-else id="count-view" class="count-area">{{ count }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

interface ICounter {
  isLoading: boolean
  count: number
}

export default defineComponent({
  name: 'Counter',
  props: {
    step: Number
  },
  setup () {
    const state = reactive<ICounter>({
      count: 0,
      isLoading: false
    })

    function increment (num: number): void {
      state.count += num
    }

    return {
      state,
      count: computed(() => state.count),
      isLoading: computed(() => state.isLoading),
      increment
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count-area {color:blueviolet}
</style>
