<template>
  <div class="users-show">
   
    <h1>Name: {{user.first_name}} {{user.last_name}}</h1>
    <h2>Email: {{ user.email }}</h2><br>

    <img src="https://res.cloudinary.com/dcmo9tfmu/image/upload/v1561493524/MED%20PICS/capstone_tiqe2y.jpg" alt="mwp"> 
    <h2>Favorites:</h2>


    <div v-for="meditation in user.meditations">
    <h3> {{meditation.title}} </h3>
    <p>play<button class="button play" @click.prevent="playSound(meditation.sound_url)">
      <span class="fa fa-play-circle-o"></span>
    </button></p><br>
    <p>pause<button class="button play" @click.prevent="pauseSound(meditation.sound_url)">
      <span class="fa fa-play-circle-o"></span>
    </button></p><br>
    <p>un-fav<button class="button play" @click.prevent="toggleFavorite(meditation.id)">
      <span class="fa fa-play-circle-o"></span>
    </button></p>
      
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
      firstName: "",
      lastName: "",
      email: "",
      errors: [],
      userMeditations: [],
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

    pauseSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.pause();
      }
    },

    toggleFavorite(medId) {
      console.log(medId);
      axios
        .delete("/api/user_meditations/" + medId)
        .then(response => {
          console.log(response.data);
          var index = this.user.meditations.indexOf(medId);
          this.user.meditations.splice(index, 1);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};

</script>

<!-- if association exists a button to delete shows, if not a button to favorite -->