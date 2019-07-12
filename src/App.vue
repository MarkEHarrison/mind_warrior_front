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


