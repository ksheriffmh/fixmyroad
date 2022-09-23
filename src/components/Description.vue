<template>
  <div id="description-block" class="description">
    <div class="heading">
      <span class="description-text">Description</span
      ><a @click="closePopup" class="close-icn">X</a>
    </div>
    <textarea class="text-area"></textarea>
  </div>
</template>
      
      <script>
export default {
  name: "UploadImage",
  methods: {
    closePopup() {
      document.getElementById("description-block").classList.remove("show");
      document.getElementById("description-block").classList.add("hide");
    },
  },
};
</script>
      
      <style lang="scss">
/* description Styling */

.description {
  width: 100vw;
  margin: 0 auto;
  background-color: #fff;
  position: absolute;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-topright: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translateY(89vh);
  transition: all 0.5s ease-in-out;
  padding-bottom: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &.show {
    transform: translateY(0px);
    bottom: 0vh;
  }
  &.hide {
    transform: translateY(0px);
    bottom: -45vh;
  }

  .heading {
    padding-top: 30px;
    padding-bottom: 20px;
    .description-text {
      padding-left: 20px;
    }
    .close-icn {
      padding-right: 20px;
      float: right;
    }
  }
  .text-area{
    background: #f2f3f5;
    margin: 25px;
    height: 80px;
    border-radius: 10px;
    border: 0;
  }
}
</style>
      