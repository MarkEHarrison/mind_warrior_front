<template>
  <div class="meditations-index">
    <!-- <div id="app"> -->
    <!-- <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-show-count="false"
    >Tweet</a> -->

    <h1>Meditations</h1>

    <div v-for="meditation in meditations">
      <h2>{{ meditation.title }}</h2>
      <p>Practice: {{ meditation.practice }}</p>
      <p>Length: {{ meditation.length }}</p>

      <p>Play</p>
      <button class="button play" @click.prevent="playSound(meditation.sound_url)">
        <span class="fa fa-play-circle-o"></span>
      </button><br>
      <!-- <button class="button play" @click.prevent="pauseSound(meditation.sound_url)">
        <span class="fa fa-play-circle-o"></span>
      </button><br> -->
      <p>Favorite</p>
      <button class="button play" @click.prevent="toggleFavorite(meditation.id)">
        <span class="fa fa-play-circle-o"></span>
      </button>
    </div>

    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div v-for="meditation in meditations" class="col-md-4">
                <article class="portfolio portfolio-2 post-grid">
                  <div class="post-thumb">
                    <a href=" "><img src="assets/images/gl-1.jpg" alt=""></a>
                    <div class="post-thumb-overlay text-center">
                      <div class="text-uppercase text-center">
                        <a href="single-portfolio.html"><i class="fa fa-link"></i></a>
                        <a href="assets/images/gl-1.jpg" data-rel="prettyPhoto[gallery]"><i
                          class="fa fa-search"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="post-content">
                    <header class="entry-header text-center text-uppercase">
                      <h6><a href="#"> craft</a></h6>
                      <h2 class="entry-title"><a href=" ">{{ meditation.title }}</a></h2>
                    </header>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      userMeditations: [],
      meditations: [],
      articles: [],
      audioPlay: false
    };
  },
  created: function() {
    axios.get("/api/meditations").then(response => {
      this.meditations = response.data;
      console.log(this.meditations);
    });
  },
  methods: {

    // pauseSound(sound) {

    //   if (sound) {
    //     var audio = new Audio(sound);
    //     audio.pause();
    //   }
    // },
    // playSound(sound) {

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
      var params = {
        meditation_id: medId
      };
      console.log(params);
      axios
        .post("/api/user_meditations", params)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }

  }
};
</script>

