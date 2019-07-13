

<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>ACRT Score:</label>
          <input type="text" class="form-control" v-model="acrt">
        </div>
        <div class="form-group">
          <label>Range Qualification Scorec:</label>
          <input type="text" class="form-control" v-model="rangeQualification">
        </div>
        <div class="form-group">
          <label>12 Mile Ruck Time:</label>
          <input type="text" class="form-control" v-model="twelveMile">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
  


  
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      acrt: "",
      rangeQualification: "",
      twelveMile: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        acrt: this.acrt,
        range_qualification: this.rangeQualification,
        twelve_mile: this.twelveMile,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
