<template>
  <div class="meditations-index">
    <!-- <div id="app"> -->
    <!-- <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-show-count="false"
    >Tweet</a> -->
    <h1>Meditations</h1>
    <div v-for="meditation in meditations">
      <h2>{{ meditation.title }}</h2>
      <!--  <p>{{meditation.sound_url}}</p> -->
      <p>Practice: {{ meditation.practice }}</p>
      <p>Length: {{ meditation.length }}</p>
      <button class="button play" @click.prevent="playSound(meditation.sound_url)">
        <span class="fa fa-play-circle-o"></span>
      </button>
      <button class="button play" @click.prevent="toggleFavorite(meditation.id)">
        <span class="fa fa-play-circle-o"></span>
      </button>
    </div>
   
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user_meditations: [],
      meditations: [],
      articles: []
    };
  },
  created: function() {
    axios.get("/api/meditations").then(response => {
      this.meditations = response.data;
      console.log(this.meditations);
    });
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    toggleFavorite(medId) {
      console.log(medId);
      var params = {
        meditation_id: medId
         
      };
      console.log(params);
      axios
        .post("/api/user_meditations", params)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

