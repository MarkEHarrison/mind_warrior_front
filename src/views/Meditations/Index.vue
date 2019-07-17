<template>
  <div class="meditations-index">
    <header>
      <div id="img-header1">
        <div class="container">
          <div id="logo">
            <h1>
              MINDFULNESS MODE
            </h1>
          </div>
        </div>
      </div>
    </header>
    <div class="kotha-default-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="blogFilter text-center text-uppercase">
              <ul class="list-inline">
                
                <li><a href="#" data-filter=".design">Breath</a></li>
                <li><a href="#" data-filter=".development">Sitting</a></li>
                <li><a href="#" data-filter=".branding">Body Scan</a></li>
              </ul>
            </div>
            <div class="row">
              <div :key="meditation.id" v-for="meditation in meditations" class="col-md-4">
                <article class="portfolio portfolio-2 post-grid">
                  <div class="post-thumb">
                    <a href=" ">
                      <img :src="meditation.image_url"/>
                    </a>
                  </div>
                  <div class="post-content">
                    <header class="entry-header text-center text-uppercase">
                      <h6>
                        <a href="#">{{meditation.length}}</a>
                      </h6>
                      <h4 class="entry-title">
                        <a href=" ">{{ meditation.title }}</a>
                      </h4>
                      <h2 class="entry-title">
                        <a href=" ">{{ meditation.practice}}</a>
                      </h2>
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

    playSound(soundUrl) {
      if (!this.audio) {
        this.audio = new Audio(soundUrl);
      }
      if (this.playing !== soundUrl) {
        this.audio.play();
        this.playing = soundUrl;
      } else {
        this.audio.pause();
        this.playing = "";
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