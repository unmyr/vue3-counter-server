<template>
  <div class="home">
    <h3>Global Counter with Vuex</h3>
    <CounterWithVuex :step="1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterWithVuex from "@/components/CounterWithVuex.vue";

export default defineComponent({
  name: "Home",
  components: {
    CounterWithVuex,
  },
});
</script>
