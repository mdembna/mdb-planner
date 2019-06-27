<template>
  <div>
    <h2>Lifecycle</h2>
    <mdbBtn @click="increment">Increment</mdbBtn>
    <p>{{value}}</p>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";

export default {
  name: "Lifecycle",
  components: { mdbBtn },
  data() {
    return {
      value: 0
    };
  },
  methods: {
    increment() {
      this.value += 1;
    }
  },
  beforeCreate() {
    console.log("before created");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style scoped>
</style>
