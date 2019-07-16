<template>
  <div class="users-show">
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <article class="single-blog">
              <div class="post-thumb">
                <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
              <div class="single-about">
                <div class="about-us-img pull-left">
                  <img src="assets/images/team-member-1.jpg" alt="" class="img-circle">
                </div>
                <div class="about-us-text">
                  <h3 class="text-uppercase">{{user.first_name}} {{user.last_name}}</h3>
                  <h5>{{user.email}}</h5>
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
              </div>
              <div class="our-skills">
                <h3 class="bar-heading text-left">My Military Skills Scores</h3>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="300" style="width:100%">
                      Army Combat Readiness Test (ACRT) 300{{user.acrt}}
                    </div>
                  </div>
                </div>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="40" style="width:90%">
                      Range Qualification 36{{user.range_qualification}}
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
              </div>
            </article>
          </div>
          <div class="col-sm-4">
            <div class="kotha-sidebar">
              <center><h1> My Meditations </h1></center>
              <aside v-for="meditation in user.meditations" class="widget widget-popular-post">
                        <h3 class="widget-title text-uppercase text-center"></h3>
                        <ul>
                          <li>
                            <a href="#" class="popular-img"><img :src="meditation.image_url" alt="">
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
                                <div
                                :style="styles.button"
                                @click.prevent="toggleFavorite(meditation.id)">
                                <span class="fa-stack fa-2x">
                                  <i class="fa fa-heart fa-stack-1x"></i>
                                  <i class="fa fa-bolt fa-stack-1x fa-inverse"></i>
                                  
                                </span>
        
                                <!-- <div @click.prevent="toggleFavorite(meditation.id)">
                                  <span :style="styles.button" class="fa-stack fa-2x">
                                    <i class="fa fa-heart fa-stack-1x"></i>
                                    <i class="fa fa-bolt fa-stack-1x fa-inverse"></i>
                                  </span>
                                </div> -->
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
    // color: "rgb(68, 68, 68)"
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

