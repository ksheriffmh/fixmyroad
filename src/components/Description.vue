<template>
  <div id="description-block" class="description">
    <div class="heading">
      <span class="description-text">Description</span>
      <a @click="closePopup" class="close-icn">X</a>
    </div>
    <textarea
      placeholder="Type your description here"
      class="text-area"
    ></textarea>
    <button class="go-btn" @click="submit">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 16.77 28.4"
        style="enable-background: new 0 0 16.77 28.4"
        xml:space="preserve"
      >
        <path
          class="st0"
          d="M3.96,1.51c-0.68-0.68-1.78-0.68-2.45,0C0.84,2.19,0.83,3.27,1.47,3.95l0.04,0.04l10.34,10.45L1.51,24.9
	c-0.66,0.67-0.68,1.75-0.04,2.44l0.04,0.04c0.66,0.67,1.73,0.68,2.41,0.04l0.04-0.04l11.57-11.69c0.66-0.67,0.68-1.75,0.04-2.44
	l-0.04-0.04L3.96,1.51z"
        />
      </svg>
    </button>
  </div>
</template>
      
      <script>
export default {
  name: "UploadImage",
  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    closePopup() {
      document.getElementById("map-frame").style.height="90vh";
      document.getElementById("description-block").classList.remove("show");
      document.getElementById("description-block").classList.add("hide");
    },
    submit() {
      console.log("submitted");
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
  align-items: center;
  &.show {
    transform: translateY(0px);
    bottom: 0vh;
  }
  &.hide {
    transform: translateY(0px);
    bottom: -55vh;
  }

  .heading {
    padding-top: 30px;
    padding-bottom: 20px;
    width: 100vw;
    .description-text {
      padding-left: 20px;
    }
    .close-icn {
      padding-right: 20px;
      float: right;
    }
  }
  .text-area {
    background: #f2f3f5;
    margin: 25px;
    padding: 5px;
    height: 30vw;
    width: 80vw;
    border-radius: 10px;
    border: 0;
    line-height: 1.5;
    &::placeholder {
      padding: 5px;
      font-size: 12px;
      color: #999;
      line-height: 1.5;
    }
  }
  .go-btn {
    width: 50px;
    padding: 15px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    background: #73ddc1;
    fill: #fff;
    left: 50%;
    svg {
      width: 12px;
    }
  }
}
</style>
      