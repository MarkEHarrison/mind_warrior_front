<template>
  <div class="articles-index">
    <header>
      <div id="img-header">
        <div class="container">
          <div id="logo">
            <h1>
              NEWS ROOM
            </h1>
          </div>
        </div>
      </div>
    </header>
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div v-for="article in articles" class="col-md-12 text-center">
            <div class="row">
              <div class="col-sm-8 col-sm-offset-2">
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
                          <button class="btn btn-success">
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
      <footer>
        <div class="footer-widget-row">
          <div class="footer-widget contact-widget">
            <p>MWP is dedicated to helping you rank up and make the most of your career by infusing mental health into your personal care routine. 
                    Increase intelligence, focus, and calm under chaos. 
                    Meditate in Mindfulness Mode, store your favorites in My Hub, then jump into the News Room and stay current on all news that might affect where you're going next in the world.</p>
            <div class="address">
              <h4 class="text-uppercase">contact Info</h4>
              <p> 123 America Blvd, USA</p>
              <p> Phone: +123 456 78900</p>
              <a href="mailto:mhworld11@icloud.com">mhworld11@icloud.com</a>
            </div>
          </div>
          <div class="footer-widget twitter-widget">
            <h2 class="widget-title text-uppercase">
              Latest TWeeTs
            </h2>
            <div class="single-tweet">
              <p>Check our new Twitter Page <br>
                <a href="https://twitter.com/MindWarriorPro">https://twitter.com/MindWarriorPro</a></p>
              <h4><i class="fa fa-twitter"></i>Tweeted on 17 hours ago</h4>
            </div>
          </div>
          <div class="footer-widget social-widget">
            <h2 class="widget-title text-uppercase">
              Featured video
            </h2>
            <div class="footer-video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/v7KQsS2kLM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="text-center ft-copyright">
          <p>&copy; 2017 <a href="">Kotha PRO </a> - Designed with <i class="fa fa-heart"></i> by <a
            href="http://shapedtheme.com">ShapedTheme</a>
          </p>
        </div>
      </footer>
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


