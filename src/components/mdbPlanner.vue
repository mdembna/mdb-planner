<template>
  <mdb-card class="planner-card">
    <mdb-card-header>
      <mdb-card-title>{{title}}</mdb-card-title>
    </mdb-card-header>
    <mdb-card-body>
      <mdb-tabs
        class="text-uppercase"
        :links="tabs"
        default
        :active="0"
        :transition-duration="0.7"
        transition-style="ease-out"
      >
        <template v-for="(tab, index) in tabs" :slot="tab.text">
          <mdbListGroup class="mt-3" :key="index">
            <mdbListGroupItem v-for="(task, index) in tasks[tab.text]" :key="task.id">
              <div class="m-2">
                <strong class="mr-2">{{index+1}}.</strong>
                {{task.title}}
                <small class="ml-3 grey-text">{{task.details}}</small>
              </div>
              <div class="float-right">
                <small class="ml-3"><img v-if="task.userPhotoURL" :src="task.userPhotoURL" alt="Avatar" width="30px" height="30px" class="rounded-circle mr-3"></small>
                <mdb-icon v-if="task.done" icon="check" :color="color" @click.native="user && uncheckTask(tab.text, task.id)"/>
                <mdb-icon v-else icon="spinner" @click.native="user && checkTask(tab.text, task.id)"/>
                <mdb-icon v-if="user && user.email === task.userEmail" class="ml-3" icon="trash" color="danger" @click.native="deleteTask(tab.text, task.id)"/>
              </div>
            </mdbListGroupItem>
            <mdbListGroupItem v-if="user">
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
    <div style="position: fixed; bottom: 10px; right: 10px;">
      <mdb-card v-if="user">
        <mdb-card-body>
          <img :src="user.photoURL" alt="Avatar" width="50px" height="50px" class="rounded-circle"> {{user.email}} 
          <mdb-btn @click.native="signOut">Sign Out</mdb-btn>
        </mdb-card-body>
      </mdb-card>
      <mdb-btn v-else @click.native="signIn">Sign In</mdb-btn>
    </div>
  </mdb-card>
</template>
<script>
import { db } from '../main';
import firebase from 'firebase/app'
import 'firebase/auth'

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
      taskTitle: "",
      taskDetails: "",
      user: null
    };
  },
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      }
    })
  },
  methods: {
    addTask(day) {
      if (this.taskTitle !== "" && this.taskDetails !== "") {
        db.collection(day).add({
          title: this.taskTitle,
          details: this.taskDetails,
          done: false,
          date: new Date(),
          userEmail: this.user.email,
          userPhotoURL: this.user.photoURL
        }).then(() => {
          this.taskTitle = "";
          this.taskDetails = "";
        })
      }
    },
    checkTask(day, id) {
      db.collection(day).doc(id).set({
        done: true
      }, {merge: true});
    },
    uncheckTask(day, id) {
      db.collection(day).doc(id).set({
        done: false
      }, {merge: true});
    },
    deleteTask(day, id) {
      db.collection(day).doc(id).delete();
    },
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.user = result.user
      })
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        this.user = null
      })
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
