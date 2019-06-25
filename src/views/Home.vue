
<!-- <template>
  
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      photos: [],
      currentPhoto: {},
      newPhotoName: "",
      newPhotoWidth: "",
      newPhotoHeight: ""

    };
  },
  created: function() {
    axios.get("/api/photos").then(response => {
      this.photos = response.data;
    });
  },
  methods: {
    createPhoto: function() {
      var params = {
        name: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight
      };
      axios.post("/api/photos", params).then(response => {
        this.photos.push(response.data);
        this.newPhotoName = "";
        this.newPhotoWidth = "";
        this.newPhotoHeight = "";
      });
    },
    showPhoto: function(photo) {
      if (this.currentPhoto === photo) {
        this.currentPhoto = {};
      } else {
        this.currentPhoto = photo;
      }
    },
    updatePhoto: function(photo) {
      var params = {
        name: photo.name,
        width: photo.width,
        height: photo.height
      };
      axios
        .patch("/api/photos/" + photo.id, params)
        .then(response => {
          this.currentPhoto = {};
        });
    },
    destroyPhoto: function(photo) {
      axios
        .delete("/api/photos/" + photo.id)
        .then(response => {
          var index = this.photos.indexOf(photo);
          this.photos.splice(index, 1);
        });
    }
  }
};
</script>


 -->

 <template>
  <div class="home">

    
    <h1>{{ message }}</h1>

    <div v-for="meditation in meditations">
      <h3>title: {{ meditation.title }}</h3>
      <img v-bind:src="meditation.image_url" alt="">
      
    </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Mini meditations",
      meditations: [],
    };
  },
  created: function() {
    axios.get("/api/meditations").then(response => {
      this.meditations = response.data;
    });
  },
  methods: {
    
      
    
  }
};
</script>