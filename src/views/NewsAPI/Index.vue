<template>

  <div class="articles-index">
    <h1>Articles</h1>
    <div v-for="article in articles">
      <h2>{{ article.source }}</h2>
      <p>Author: {{ article.author }}</p>
      <p>Tilte: {{ article.title }}</p>
      <p>Description: {{ article.description }}</p>
      <p>GO TO: {{article.url}}</p>
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


