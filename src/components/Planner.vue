<template>
  <mdb-card class="planner-card">
    <mdb-card-header>
      <mdb-card-title>Our code will be here</mdb-card-title>
    </mdb-card-header>
    <mdb-card-body></mdb-card-body>
  </mdb-card>
</template>
<script>
import {
  mdbCard,
  mdbCardHeader,
  mdbCardTitle,
  mdbCardBody,
  mdbListGroup,
  mdbListGroupItem,
  mdbBtn,
  mdbIcon,
  mdbTabs,
  mdbInput,
  mdbRow,
  mdbCol
} from "mdbvue";
const Planner = {
  name: "Planner",
  components: {
    mdbCard,
    mdbListGroup,
    mdbListGroupItem,
    mdbBtn,
    mdbIcon: mdbIcon,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardBody,
    mdbTabs,
    mdbInput,
    mdbRow,
    mdbCol
  },
  props: {
    tasks: Object,
    title: {
      type: String,
      default: "Daily Planner"
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  data() {
    return {
      tabs: [
        { text: "monday" },
        { text: "tuesday" },
        { text: "wednesday" },
        { text: "thursday" },
        { text: "friday" },
        { text: "saturday" },
        { text: "sunday" }
      ],
      taskList: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
      },
      taskTitle: "",
      taskDetails: ""
    };
  },
  methods: {
    addTask(day) {
      if (this.taskTitle !== "" && this.taskDetails !== "") {
        this.taskList[day].push({
          title: this.taskTitle,
          details: this.taskDetails,
          done: false
        });
        this.taskTitle = "";
        this.taskDetails = "";
      }
    }
  },
  mounted() {
    if (this.tasks) {
      this.taskList = { ...this.tasks };
    }
  }
};

export default Planner;
</script>

<style scoped>
.planner-card {
  min-height: 650px;
}
</style>
