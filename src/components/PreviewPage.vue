<template>
  <div class="container mb-5">
    <mdb-planner :tasks="toDoList"/>
  </div>
</template>

<script>
import mdbPlanner from "./mdbPlanner";
import { db } from '../main';

const PreviewPage = {
  components: {
    mdbPlanner
  },
  data() {
    return {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };
  },
  computed: {
    toDoList() {
      return {
        monday: this.monday,
        tuesday: this.tuesday,
        wednesday: this.wednesday,
        thursday: this.thursday,
        friday: this.friday,
        saturday: this.saturday,
        sunday: this.sunday
      }
    }
  },
  firestore() {
    return {
      monday: db.collection('monday').orderBy('date', 'asc'),
      tuesday: db.collection('tuesday').orderBy('date', 'asc'),
      wednesday: db.collection('wednesday').orderBy('date', 'asc'),
      thursday: db.collection('thursday').orderBy('date', 'asc'),
      friday: db.collection('friday').orderBy('date', 'asc'),
      saturday: db.collection('saturday').orderBy('date', 'asc'),
      sunday: db.collection('sunday').orderBy('date', 'asc')
    }
  }
};

export default PreviewPage;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
