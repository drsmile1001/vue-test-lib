<template>
  <button @click="add">counter:{{ count }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";
export default defineComponent({
  name: "CounterButton",
  setup() {
    const state = reactive({
      count: 0,
    });

    function add() {
      state.count += 1;
    }

    return {
      ...toRefs(state),
      add,
    };
  },
});
</script>

<style>
</style>