<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <h1 class="mb-4">Student Information Form</h1>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
           v-model="name"/>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select"  v-model="gender">
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="dob" class="form-label">Date of Birth</label>
          <input
            type="date"
            id="dob"
            class="form-control"
           v-model="dob"/>
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label">Subject</label>
          <input
            type="text"
            id="subject"
            class="form-control"
           v-model="subject"/>
        </div>
        <div class="mb-3">
          <label for="score" class="form-label">Score</label>
          <input
            type="number"
            id="score"
            class="form-control"
           v-model="score"/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mt-4">
          <h2>Student Information</h2>
          <p>Name: {{getName}}</p>
          <p>Gender: {{getGender}}</p>
          <p>Date of Birth: {{getDob}} </p>
          <p>Subject: {{getSubject}}</p>
          <p>Score: {{getScore}}</p>
          <p :class="scoreColor">Status: {{setScore}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from 'vue';
export default {
  name: "App",
  data(){
    return{
      name: "",
      gender: "",
      dob: "",
      subject: "",
      score: 0,
      status: ""
    }
  },
  computed: {
    getName(){
      return this.name;
    },
    getGender(){
      return this.gender;
    },
    getDob(){
      return this.dob;
    },
    getSubject(){
      return this.subject;
    },
    getScore(){
      return this.score;
    },
    setScore(){
      const score =this.score;
      if (score>=50) {
        return "Pass";
      }if (score>0 && score<50) {
        return "Fail";
      } else {
        return null;
      }
    },
    scoreColor(){
      const score =this.score;
      if (score>=50) {
        return "text-primary";
      }if(score>0 && score<50) {
        return "text-danger";
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
body {
  margin-top: 50px;
}
</style>
