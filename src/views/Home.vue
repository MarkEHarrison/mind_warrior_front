
<template>
  <div class="home">
    
    
    <h1>{{ message }}</h1>
    <img src="https://res.cloudinary.com/dcmo9tfmu/image/upload/v1561493541/MED%20PICS/capstone2_o0tgit.jpg" alt="mwp">

    <!-- <div v-for="meditation in meditations">
      <h3>Title: {{ meditation.title }}</h3>
      <h3>Practice: {{ meditation.practice }}</h3> -->
      
      
    </div>

 
</template>

<style>

</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to the Mind Warrior Project",
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