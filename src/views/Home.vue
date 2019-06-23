<template>
  <div class="home">





    <h1>{{ message }}</h1>
    <div v-for="meditation in meditations">
      <img v-bind:src="meditation.image_url" alt="">
 
      <h3>Title: {{meditation.title}}</h3>
      <p>Practice: {{meditation.practice}}</p>
      <p>Length: {{meditation.length}}</p>
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
      message: "Mind Warrior!",
      meditations: []
    };
  },
  created: function() {
    axios.get("/api/meditations").then(response => {
      this.meditations = response.data;
    });
  },
  methods: {}
};
</script>

