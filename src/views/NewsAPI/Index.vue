<template>

  <div class="articles-index">
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div v-for="article in articles" class="col-sm-8 text-center">
            <div class="row">
              <div class="col-md-12 col-md-offset-3">
                <article class="single-blog post-list">
                  <div class="media">
                    <div class="media-left">
                      <div class="post-thumb">
                        <img :src="article.urlToImage">
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="post-content">
                        <div class="entry-header cdtext-left text-uppercase">
                          <a href="" class="post-cat">Story</a>
                          <h2><a href="single-page.html">{{article.title}}</a></h2>
                        </div>
                        <div class="entry-content">
                          <p>{{article.description}}</p>
                        </div>
                        <div class="post-meta">
                          <ul class="list-inline author-meta">
                            <li class="author">By {{article.name}} </li><br>
                          </ul>
                        </div>
                        <center><a target="_blank" rel="noopener noreferrer" v-bind:href="article.url">
                          <button class="btn-warning">
                            <p>GO TO STORY</p>
                          </button>
                        </a></center>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

















    <!-- <h1>TOP HEADLINES</h1>
    <div v-for="article in articles">
      <h2>{{ article.source }}</h2>
      <a href=" "><img src="" alt=""></a>
      <p>Title: {{ article.title }}</p>
      <p>Description: {{ article.description }}</p>

      <a target="_blank" rel="noopener noreferrer" v-bind:href="article.url">
        <button class="btn-warning">
          <p>GO TO STORY</p>
        </button>
      </a>
      
     

    </div>
 -->

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


