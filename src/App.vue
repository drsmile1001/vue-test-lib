<template>
  <div id="app">
    <CounterButton />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CounterButton from "@/components/CounterButton.vue";

export default Vue.extend({
  name: "App",
  components: {
    CounterButton,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
