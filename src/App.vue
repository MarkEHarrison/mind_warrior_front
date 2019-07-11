<template>
  <div id="app">

    <header class="kotha-menu marketing-menu">
      <nav class="navbar  navbar-default">
        <div class="container">
          <div class="menu-content">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#myNavbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="top-social-icons list-inline pull-right">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li class="top-search">
                  <a href="#" class="sactive"><i class="fa fa-search"></i></a>
                </li>
              </ul>
              <ul class="nav navbar-nav text-uppercase pull-left">
                <li><router-link to="/">Home</router-link></li>
                <li v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link></li>
                <li v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></li>
                <li v-else><router-link to="/login">Login</router-link></li>
                <li><router-link to="/users/${user_id}">Your Hub</router-link></li>
                <li><router-link to="/meditations">Mindfulness Mode</router-link></li>
                <li><router-link to="/articles">News Room</router-link></li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
            <div class="show-search">
              <form role="search" method="get" id="searchform" action="#">
                <div>
                  <input type="text" placeholder="Search and hit enter..." name="s" id="s">
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </nav>
    </header>


    <router-view/>
 
    <!-- <footer>
      <div class="container">
        <div class="footer-widget-row">
          <div class="footer-widget contact-widget">
            <div class="widget-title">
              <img src="assets/images/ft-logo.png" alt="">
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eaccusam et justo duo
              dolores eteem.</p>
            <div class="address">
              <h4 class="text-uppercase">contact Info</h4>
              <p> 239/2 NK Street, DC, USA</p>
              <p> Phone: +123 456 78900</p>
              <a href="mailto:theme@kotha.com">theme@kotha.com</a>
            </div>
          </div>
          <div class="footer-widget twitter-widget">
            <h2 class="widget-title text-uppercase">
              Latest TWeeTs
            </h2>
            <div class="single-tweet">
              <p>Check our new theme 'kotha - Personal WordPress Blog Theme' on #themeforest #Envato
                #WordPress <br>
                <a href="https://t.co/kN5OPEuPzx">https://t.co/kN5OPEuPzx</a></p>
              <h4><i class="fa fa-twitter"></i>Tweeted on 17 hours ago</h4>
            </div>
            <div class="single-tweet">
              <p>Check our new theme 'kotha - Personal WordPress Blog Theme' on #themeforest #Envato
                #WordPress
                <br>
                <a href="https://t.co/kN5OPEuPzx">https://t.co/kN5OPEuPzx</a></p>
              <h4><i class="fa fa-twitter"></i>Tweeted on 17 hours ago</h4>
            </div>
          </div>
          <div class="footer-widget social-widget">
            <h2 class="widget-title text-uppercase">
              Featured video
            </h2>
            <div class="footer-video">
              <iframe width="300" height="250" src="https://www.youtube.com/embed/VTlXttQL_Yk"
                      allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid text-center ft-copyright">
        <p>&copy; 2017 <a href="">Kotha PRO</a> - Designed with <i class="fa fa-heart"></i> by <a
          href="http://shapedtheme.com">ShapedTheme</a></p>
      </div>
    </footer>
     -->

 
  </div>
</template>
<script>
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      }
      return false;
    },
  }
};


</script>


