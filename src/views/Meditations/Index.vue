<template>

  <div class="meditations-index">
    <h1>Meditations</h1>
    <div v-for="meditation in meditations">
      <h2>{{ meditation.title }}</h2>
      <p>Practice: {{ meditation.practice }}</p>
      <p>Length: {{ meditation.length }}</p>
      <button class="button play" @click.prevent="playSound('sound_url')"><span class="fa fa-play-circle-o"></span></button> 
    </div>


  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
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
    
  }
};
</script>


