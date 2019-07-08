<template>
  <div class="users-show">

    <h1>Name: {{user.first_name}} {{user.last_name}}</h1>
    <h2>Email: {{ user.email }}</h2>

    <div v-for="meditation in user.meditations">
    <h2>Favorites: {{meditation.title}}</h2>
    <button class="button play" @click.prevent="playSound(meditation.sound_url)">
        <span class="fa fa-play-circle-o"></span>
      </button>
    </div>
  

    

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
      first_name: "",
      last_name: "",
      email: "",
      errors: [],
      user_meditations: [],
      meditations: []
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
        this.$router.push("/");
      });
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
  }
};
</script>