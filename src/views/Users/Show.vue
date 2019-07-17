<template>
  <div class="users-show">
    <header>
      <div id="img-header2">
        <div class="container">
          <div id="logo">
            <h1>
              MY HUB
            </h1>
          </div>
        </div>
      </div>
    </header>
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <article class="single-blog">
              <div class="post-thumb">
                <iframe src="https://open.spotify.com/embed/album/4Wv5UAieM1LDEYVq5WmqDd" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </article>
              <div class="our-skills">
                <h3 class="bar-heading text-left">My Military Skills Scores</h3>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="300" style="width:100%">
                      Army Combat Readiness Test (ACRT) 300 {{user.acrt}}
                    </div>
                  </div>
                </div>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="32" aria-valuemin="0"
                         aria-valuemax="40" style="width:80%">
                      Range Qualification 34 {{user.range_qualification}}
                    </div>
                  </div>
                </div>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="3:00:00" style="width:70%">
                      12 Mile Ruck Time 2:30:00{{user.twelve_mile}}
                    </div>
                  </div>
                </div>
              </div><br>
            <article>
              <div class="top-comment"><!--top comment-->
                <img src="assets/images/comment.jpg" class="pull-left img-circle" alt="">
                <h3><a href="">{{user.first_name}} {{user.last_name}}</a></h3>
                <h4>{{user.email}}</h4>
                <div class="social-share">
                    <ul class="list-inline">
                      <li class="text-center">
                        <a class="s-facebook" href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-twitter" href="https://twitter.com/home"><i class="fa fa-twitter"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-google-plus" href=""><i class="fa fa-google-plus"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-linkedin" href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin"></i></a>
                      </li>
                      <li class="text-center">
                        <a class="s-instagram" href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
              </div>
            </article>
          </div>
          <div class="col-sm-4">
                      <div class="kotha-sidebar">
                        <center><h1> FAVORITE MEDITATIONS </h1></center><br>
                          <aside v-for="meditation in user.meditations" class="widget widget-popular-post">
                                  <h3 class="widget-title text-uppercase text-center"></h3>
                                  <ul>
                                    <li>
                                      <a href="#" class="popular-img"><img :src="meditation.image_url" alt="meditation.image_url">
                                      </a>
                                      <div class="p-content">
                                        <center><h4><a href="#" class="text-uppercase">{{meditation.title}}</a></h4></center>
                                        <center><h4><a href="#" class="text-uppercase">{{meditation.practice}}</a></h4></center>
                                        <div :style="styles.buttonGroup">
                                          <div
                                            :style="styles.button"
                                            @click.prevent="playSound(meditation.sound_url)">
                                            <span
                                              :class="[meditation.sound_url !== playing ? playClass : pauseClass]"
                                            ></span>
                                          </div>
                                          <br />
                                          <div @click.prevent="toggleFavorite(meditation.id)">
                                            <span :style="styles.button" class="fa fa-heart fa-2x"></span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </aside>
                          <aside class="widget news-letter-widget">
                            <h2 class="widget-title text-uppercase text-center">Your Account</h2>
                            <form action="#">
                              <center><button class="btn btn-danger">
                              <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit Profile</router-link>
                            </button></center><br>
                            <center><button class="btn btn-danger" v-on:click="destroy(user)">Delete Account</button></center>
                            </form>
                       </aside> 
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sEmZIi_0Kj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
.fa-heart {
    color:#E4287C;
}
.fa-bolt {
    top:-5%;
    left:2%;
    font-size:50%;
}
</style>

<script>
import axios from "axios";

const styles = {
  buttonGroup: {
    display: "flex",
    "justify-content": "space-between",
    "margin-top": "20px"
  },
  button: {
    width: "80px",
    color: "rgb(68, 68, 68)"
  }
};

export default {
  data: function() {
    return {
      user: {},
      firstName: "",
      lastName: "",
      email: "",
      acrt: "",
      rangeQualification: "",
      twelveMile: "",
      errors: [],
      userMeditations: [],
      meditations: [],
      articles: [],
      playing: "",
      styles,
      playClass: "fa fa-play fa-2x",
      pauseClass: "fa fa-pause fa-2x"
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

