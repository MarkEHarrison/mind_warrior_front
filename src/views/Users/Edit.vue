<template>
  <div class="users-edit">

    <h1>{{user.first_name}} {{user.last_name}}</h1>
    <div>
      <form v-on:submit.prevent="submit()">
        First Name: <input type="text" v-model="user.first_name"><br>
        Last Name: <input type="text" v-model="user.last_name"><br>
        Email: <input type="text" v-model="user.email"><br>
        ACRT: <input type="text" v-model="user.acrt"><br>
        Range Score: <input type="text" v-model="user.range_qualification"><br>
        12 Mile Time: <input type="text" v-model="user.twelve_mile"><br>
        <button type="submit">Update Account</button><br>
      </form>
    </div>
  </div>











</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      first_namee: "",
      last_name: "",
      email: "",
      acrt: "",
      range_qualification: "",
      twelve_mile: "",
      meditations: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log("user", response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        acrt: this.user.acrt,
        range_qualification: this.user.range_qualification,
        twelve_mile: this.user.twelve_mile
      };

      axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push('/');  /*DO I NEED /USERS + THIS.USER.ID */
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};

</script>
