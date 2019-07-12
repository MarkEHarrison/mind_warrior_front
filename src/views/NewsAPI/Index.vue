<template>

  <div class="articles-index">
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div v-for="article in articles" class="col-sm-8">
            <div class="row">
              <div class="col-md-12">
                <article class="single-blog post-list">
                  <div class="media">
                    <div class="media-body">
                      <div class="post-content">
                        <div class="entry-header text-left text-uppercase">
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
          <div class="col-sm-4">
            <div class="kotha-sidebar">
              <aside class="widget about-me-widget  text-center">
                <div class="about-me-content">
                  <div class="about-me-img">
                    <img src="assets/images/me.jpg" alt="" class="img-me img-circle">
                    <h2 class="text-uppercase">Kotha Smith</h2>
                    <p>Kotha Smith is an enthusiastic and passionate Story Teller. He loves to do different
                      home-made things
                      and share to the world.</p>
                  </div>
                </div>
                <div class="social-share">
                  <ul class="list-inline">
                    <li><a class="s-facebook" href=""><i class="fa fa-facebook"></i></a></li>
                    <li><a class="s-twitter" href=""><i class="fa fa-twitter"></i></a></li>
                    <li><a class="s-google-plus" href=""><i class="fa fa-google-plus"></i></a></li>
                    <li><a class="s-linkedin" href=""><i class="fa fa-linkedin"></i></a></li>
                    <li><a class="s-instagram" href=""><i class="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </aside>
              <aside class="widget news-letter-widget">
                <h2 class="widget-title text-uppercase text-center">Get Newsletter</h2>
                <form action="#">
                  <input type="email" placeholder="Your email address" required>
                  <input type="submit" value="Subscribe Now"
                         class="text-uppercase text-center btn btn-subscribe">
                </form>
              </aside>
              <aside class="widget insta-widget">
                <h2 class="widget-title text-uppercase text-center">INSTAGRAM FEED</h2>
                <div class="instagram-feed">
                  <div class="single-instagram">
                    <a href="">
                      <img src="assets/images/ft-insta-1.jpg" alt="">
                    </a>
                    <div class="insta-overlay">
                      <div class="insta-meta">
                        <ul class="list-inline text-center">
                          <li><a href=""><i class="fa fa-heart-o"></i></a> 325</li>
                          <li><a href=""><i class="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                      </div>
                    </div>
                    <a href="" class="insta-link"></a>
                  </div>
                  <div class="single-instagram">
                    <a href="">
                      <img src="assets/images/ft-insta-6.jpg" alt="">
                    </a>
                    <div class="insta-overlay">
                      <div class="insta-meta">
                        <ul class="list-inline text-center">
                          <li><a href=""><i class="fa fa-heart-o"></i></a> 325</li>
                          <li><a href=""><i class="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                      </div>
                    </div>
                    <a href="" class="insta-link"></a>
                  </div>
                  <div class="single-instagram">
                    <a href="">
                      <img src="assets/images/ft-insta-4.jpg" alt="">
                    </a>
                    <div class="insta-overlay">
                      <div class="insta-meta">
                        <ul class="list-inline text-center">
                          <li><a href=""><i class="fa fa-heart-o"></i></a> 325</li>
                          <li><a href=""><i class="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                      </div>
                    </div>
                    <a href="" class="insta-link"></a>
                  </div>
                  <div class="single-instagram">
                    <a href="">
                      <img src="assets/images/ft-insta-3.jpg" alt="">
                    </a>
                    <div class="insta-overlay">
                      <div class="insta-meta">
                        <ul class="list-inline text-center">
                          <li><a href=""><i class="fa fa-heart-o"></i></a> 325</li>
                          <li><a href=""><i class="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                      </div>
                    </div>
                    <a href="" class="insta-link"></a>
                  </div>
                  <div class="single-instagram">
                    <a href="">
                      <img src="assets/images/ft-insta-7.jpg" alt="">
                    </a>
                    <div class="insta-overlay">
                      <div class="insta-meta">
                        <ul class="list-inline text-center">
                          <li><a href=""><i class="fa fa-heart-o"></i></a> 325</li>
                          <li><a href=""><i class="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                      </div>
                    </div>
                    <a href="" class="insta-link"></a>
                  </div>
                  <div class="single-instagram">
                    <a href="">
                      <img src="assets/images/ft-insta-8.jpg" alt="">
                    </a>
                    <div class="insta-overlay">
                      <div class="insta-meta">
                        <ul class="list-inline text-center">
                          <li><a href=""><i class="fa fa-heart-o"></i></a> 325</li>
                          <li><a href=""><i class="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                      </div>
                    </div>
                    <a href="" class="insta-link"></a>
                  </div>
                </div>
              </aside>
              <aside class="widget add-widget">
                <h2 class="widget-title text-uppercase text-center">Advertisement</h2>

                <div class="add-image">
                  <a href=""><img src="assets/images/add-image.jpg" alt=""></a>
                </div>
              </aside>
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


