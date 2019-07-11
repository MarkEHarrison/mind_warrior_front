<template>

  <div class="articles-index">
    <h1>TOP HEADLINES</h1>
    <div v-for="article in articles">
      <h2>{{ article.source }}</h2>
      <p>Author: {{ article.author }}</p>
      <p>Title: {{ article.title }}</p>
      <p>Description: {{ article.description }}</p>

      <a target="_blank" rel="noopener noreferrer" v-bind:href="article.url">
        <button class="btn-warning">
          <p>GO TO STORY</p>
        </button>
      </a>
      
     

    </div>


  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      articles: [],
      
    };
  },
  created: function() {
    axios.get("/api/articles").then(response => {
      this.articles = response.data;
      console.log(this.articles);
    });
  },
  methods: {
    
    
  }
};
</script>


