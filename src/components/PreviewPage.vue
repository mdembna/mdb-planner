<template>
  <div class="container mb-5">
    <mdb-planner :tasks="toDoList" color="elegant" />
  </div>
</template>

<script>
import mdbPlanner from "./mdbPlanner";
const PreviewPage = {
  components: {
    mdbPlanner
  },
  data() {
    return {
      toDoList: {
        monday: [
          { title: "code", details: "learn how to use Vue.js", done: false },
          { title: "homework", details: "mathematics and biology", done: true },
          { title: "lunch", details: "lunch with friends", done: false }
        ],
        tuesday: [
          { title: "shopping", details: "Buy new keyboard", done: false },
          {
            title: "lorem ipsum",
            details: "learn how to use Vue.js",
            done: false
          }
        ],
        wednesday: [
          { title: "code", details: "learn how to use Vue.js", done: false },
          { title: "code", details: "learn how to use Vue.js", done: false },
          { title: "code", details: "learn how to use Vue.js", done: false }
        ],
        thursday: [],
        friday: [
          { title: "code", details: "learn how to use Vue.js", done: false },
          { title: "code", details: "learn how to use Vue.js", done: false }
        ],
        saturday: [],
        sunday: []
      }
    };
  }
};

export default PreviewPage;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
