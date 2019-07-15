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
                      Army Combat Readiness Test (ACRT) {{user.acrt}}
                    </div>
                  </div>
                </div>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="40" style="width:90%">
                      Range Qualification {{user.range_qualification}}
                    </div>
                  </div>
                </div>
                <div class="bar">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="3:00:00" style="width:70%">
                      12 Mile Ruck Time {{user.twelve_mile}}
                    </div>
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
              <center><button class="btn btn-dark" @click.prevent="playSound(meditation.sound_url)">
                <span class="fa fa-play-circle-o"></span>
              </button></center>
              <center><button class="btn btn-dark" @click.prevent="toggleFavorite(meditation.id)">
                <span class="fa-stack fa-1x">
                    <i class="fa fa-heart fa-stack-1x"></i>
                    <i class="fa fa-bolt fa-stack-1x fa-inverse"></i>
                </span>
              </button></center>
              <div class="add-image">
                <a href=""><img src="assets/images/add-image.jpg" alt=""></a>
              </div>
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
      articles: []
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