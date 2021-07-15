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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  props: {
    step: Number
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment (num: number): void {
      this.count += num
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.count-area {color:blueviolet}
</style>
