<template>
  <div>
    <h2>Looping</h2>
    <p v-for="(task, i) in tasks" :key="i">{{task}}</p>
  </div>
</template>

<script>
export default {
  name: "Looping",
  data() {
    return {
      tasks: ["eat", "sleep", "code"]
    };
  }
};
</script>

<style scoped>
</style>


