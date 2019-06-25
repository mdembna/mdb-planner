<template>
  <mdb-card class="planner-card">
    <mdb-card-header>
      <mdb-card-title>{{title}}</mdb-card-title>
    </mdb-card-header>
    <mdb-card-body>
      <mdb-tabs class="text-uppercase" :links="tabs" default :active="0">
        <template v-for="(tab, index) in tabs" :slot="tab.text">
          <mdbListGroup class="mt-3" :key="index">
            <mdbListGroupItem v-for="(task, index) in taskList[tab.text]" :key="task.id">
              <div class="m-2">
                <strong class="mr-2">{{index+1}}.</strong>
                {{task.title}}
                <small class="ml-3 grey-text">{{task.details}}</small>
              </div>
              <mdb-icon v-if="task.done" icon="check" :color="color"/>
              <mdb-icon v-else icon="spinner" color="grey"/>
            </mdbListGroupItem>
            <mdbListGroupItem>
              <mdb-row class="mt-3">
                <mdb-col sm="12" md="4">
                  <mdb-input v-model="taskTitle" placeholder="title" size="sm" class="mb-3"/>
                </mdb-col>
                <mdb-col sm="12" md="4">
                  <mdb-input
                    v-model="taskDetails"
                    placeholder="description"
                    size="sm"
                    class="mb-3"
                  />
                </mdb-col>
                <mdb-col md="4">
                  <mdb-btn
                    size="md"
                    class="mt-3"
                    :outline="color"
                    @click="addTask(tab.text)"
                  >add new task</mdb-btn>
                </mdb-col>
              </mdb-row>
            </mdbListGroupItem>
          </mdbListGroup>
        </template>
      </mdb-tabs>
    </mdb-card-body>
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
  mdbCollapse,
  mdbInput,
  mdbRow,
  mdbCol
} from "mdbvue";
const mdbPlanner = {
  name: "mdbPlanner",
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
    mdbCollapse,
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

export default mdbPlanner;
</script>

<style scoped>
.planner-card {
  min-height: 650px;
}
</style>
