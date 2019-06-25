<template>
  <div class="users-show">

    <h1>{{ user.first_name }} {{ user.last_name}}</h1>
    <h2>Email: {{ user.email }}</h2>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit</router-link>
    </button>

    <button v-on:click="destroy(user)">Delete Account</button>
    
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
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    destroy: function(user) {
      axios.delete("/api/users/" + this.$route.params.id).then(response => {
        console.log(response.data);
      })
    }
  }
};
</script>