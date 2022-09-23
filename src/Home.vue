<template>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7973713728347!2d80.24382611535201!3d12.984808218100321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d639e47618b%3A0xaa10fd327e29e31c!2sAscendas%20IT%20Park!5e0!3m2!1sen!2sin!4v1663918126000!5m2!1sen!2sin"
      id="map-frame"
      style="border: 0"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <button @click="openOptions" class="btn-primary">Report a Case</button>
    <upload-image></upload-image>
  </div>
</template>

<script>
import UploadImage from "./components/UploadImage.vue";

export default {
  name: "App",
  components: {
    UploadImage,
  },
  data() {
    return {};
  },
  mounted() {
    let map = document.getElementById("map-frame");
    map.style.width = window.innerWidth.toString() + "px";
    map.style.height = window.innerHeight.toString() + "px";
  },
  methods: {
    openOptions() {
      document.getElementById("pull-up-block").classList.remove("hide");
      document.getElementById("pull-up-block").classList.add("show");
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Playfair+Display:700italic|Fauna+One);
body{
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn-primary {
  font-family: "Montesserat", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  color: #555;
  background: #fff;
  border: 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 86vw;
  height: 40px;
  padding: 5px;
  position: absolute;
  left: 10%;
  bottom: 10%;
}
</style>
