<template>
  <div class="users-show">
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <article class="post-area single-blog">
              <div class="about-me">
                <div class="about-img text-center">
                  <img src="https://res.cloudinary.com/dcmo9tfmu/image/upload/v1562951922/MED%20PICS/blog-carousel-3_okndlo.jpg" alt="" class="img-circle">
                </div>
                <div class="about-me-text">
                  <p>We are Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir
                    dulabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit am Lorem ipsum dolor sitconsetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore maliquyam erat, sed diam voluptua. </p>
                </div>
              </div>
              <div class="single-about">
                <div class="about-us-img pull-left">
                  <img src="assets/images/team-member-1.jpg" alt="" class="img-circle">
                </div>
                <div class="about-us-text">
                  <h3 class="text-uppercase">{{user.first_name}} {{user.last_name}}</h3>
                  <h5>{{user.email}}</h5>
                  <p> </p>

                  <div class="social-share">
                    <ul class="list-inline">
                      <li class="text-center">
                        <a class="s-facebook" href=""><i class="fa fa-facebook"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-twitter" href=""><i class="fa fa-twitter"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-google-plus" href=""><i class="fa fa-google-plus"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-linkedin" href=""><i class="fa fa-linkedin"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-instagram" href=""><i class="fa fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-sm-4">
            <div class="kotha-sidebar">
              <h1><center>My Meditations</center></h1><br>
             <aside v-for="meditation in user.meditations" class="widget add-widget">
              <h2 class="widget-title text-uppercase text-center">{{meditation.title}}</h2>
              <h2 class="widget-title text-uppercase text-center">{{meditation.practice}}</h2>
              <button class="button play" @click.prevent="playSound(meditation.sound_url)">
                <span class="fa fa-play-circle-o"></span>
              </button>
              <button class="button play" @click.prevent="toggleFavorite(meditation.id)">
                <span class="glyphicon glyphicon-heart"></span>
              </button>
              <div class="add-image">
                <a href=""><img src="assets/images/add-image.jpg" alt=""></a>
              </div>
             </aside> 
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <!-- <h1>Name: {{user.first_name}} {{user.last_name}}</h1>
    <h2>Email: {{ user.email }}</h2><br>

    <img src="https://res.cloudinary.com/dcmo9tfmu/image/upload/v1561493524/MED%20PICS/capstone_tiqe2y.jpg" alt="mwp"> 
    <h2>Favorites:</h2>


    <div v-for="meditation in user.meditations">
    <h3> {{meditation.title}} </h3>
    <p>play<button class="button play" @click.prevent="playSound(meditation.sound_url)">
      <span class="fa fa-play-circle-o"></span>
    </button></p><br>
    <p>pause<button class="button play" @click.prevent="pauseSound(meditation.sound_url)">
      <span class="fa fa-play-circle-o"></span>
    </button></p><br>
    <p>un-fav<button class="button play" @click.prevent="toggleFavorite(meditation.id)">
      <span class="fa fa-play-circle-o"></span>
    </button></p>
      
    </div>
  

    

    <button class="btn btn-warning">
      <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit</router-link>
    </button>

    <button v-on:click="destroy(user)">Delete Account</button>
     -->
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      firstName: "",
      lastName: "",
      email: "",
      errors: [],
      userMeditations: [],
      meditations: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);

    });
  },
  methods: {
    destroy: function(user) {
      axios.delete("/api/users/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.$router.push("/");
      });
    },
    playSound(sound) {
      if (!this.audio) {
        this.audio = new Audio(sound);
      }
      if (this.audioPlay === false) {
        this.audio.play();
        this.audioPlay = true;
      } else {
        this.audio.pause();
        this.audioPlay = false;
      }
    },

    toggleFavorite(medId) {
      console.log(medId);
      axios
        .delete("/api/user_meditations/" + medId)
        .then(response => {
          console.log(response.data);
          var index = this.user.meditations.indexOf(medId);
          this.user.meditations.splice(index, 1);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};

</script>

<!-- if association exists a button to delete shows, if not a button to favorite -->