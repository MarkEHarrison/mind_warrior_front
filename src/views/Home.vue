
<template>
  <div class="home">

    
    <h1>{{ message }}</h1>

    <div v-for="meditation in meditations">
      <h3>Title: {{ meditation.title }}</h3>
      <h3>Practice: {{ meditation.practice }}</h3>
      
      <img v-bind:src="meditation.image_url" alt="">
      
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
      message: "Meditations",
      meditations: [],
    };
  },
  created: function() {
    axios.get("/api/meditations").then(response => {
      this.meditations = response.data;
    });
  },
  
  methods: {
    
      
    
  }
};
</script>