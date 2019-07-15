
<template>
  <div class="home">
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <article class="single-blog">
              <div class="post-thumb">
                <a href=""><img src="assets/images/post-thumb-1.jpg" alt=""></a>
              </div>
              <div class="post-content">
                <div class="entry-header text-center text-uppercase">
                  <a href="" class="post-cat">Elevate</a>
                  <h2><a href="meditations">Mind Warrior Project</a></h2>
                </div>
                <div class="entry-content">
                  <!-- <h4>MWP is dedicated to helping you rank up and make the most of your career by infusing mental health into your personal care routine. 
                  Increase intelligence, focus, and calm under chaos. 
                  Meditate in Mindfulness Mode, store your favorites in My Hub, then jump into the News Room and stay current on all news that might affect where you're going next in the world.</h4> -->
                </div>
                <div class="continue-reading text-center text-uppercase">
                  <a href="meditations">Go Meditate</a>
                </div>
                <!-- <div class="post-meta">
                  <ul class="pull-left list-inline author-meta">
                    <li class="author"><a href="#">HM </a></li><br>
                    <li class="date"> On July 4th, 2019</li>
                  </ul>
                  <ul class="pull-right list-inline social-share">
                    <li><a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/home"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                </div> -->
              </div>
            </article>
            <div class="post-pagination  clearfix">
              <ul class="pagination text-left">
                <li class="active"><a href="#">1</a></li>
                <li><a href="meditations">2</a></li>
                <li><a href="articles">3</a></li>
                <li><a href="#">4</a></li>
                <!-- <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li> -->
              </ul>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mV29tY1srlo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      articles: []
      
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