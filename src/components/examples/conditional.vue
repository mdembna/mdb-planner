<template>
  <div>
    <h2>Conditional rendering</h2>
    <mdbBtn @click="toggle = !toggle">Toggle text</mdbBtn>
    <p v-if="toggle">First text</p>
    <p v-else>Second text</p>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";

export default {
  name: "Conditional",
  components: { mdbBtn },
  data() {
    return {
      toggle: false
    };
  }
};
</script>

<style scoped>
</style>
