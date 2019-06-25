<template>
  <div class="users-edit">

    <h1>{{user.first_name}} {{user.last_name}}</h1>
    <div>
      <form v-on:submit.prevent="submit()">
        First Name: <input type="text" v-model="user.first_name"><br>
        Last Name: <input type="text" v-model="user.last_name"><br>
        Email: <input type="text" v-model="user.email"><br>
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
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/1" ).then(response => {
      console.log("user", response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email
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
