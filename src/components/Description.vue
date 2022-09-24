<template>
  <div id="description-block" class="description">
    <div class="heading">
      <span class="description-text">{{ title }}</span>
      <a @click="closePopup" class="close-icn">X</a>
    </div>
    <div class="text-block">
      <textarea
        placeholder="Type your description here"
        class="text-area" v-model="description"></textarea>
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
    <div style="display: none" class="success-block">
      <div class="success-icn">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 92.2 67.5"
          style="enable-background: new 0 0 92.2 67.5"
          xml:space="preserve"
        >
          <path
            class="st0"
            d="M28.18,66.86c-0.75,0-1.46-0.3-1.99-0.82L1.82,41.66c-1.1-1.1-1.1-2.88,0-3.98c1.1-1.1,2.88-1.1,3.98,0
	l22.38,22.38L86.42,1.82c1.1-1.1,2.88-1.1,3.98,0c1.1,1.1,1.1,2.88,0,3.98L30.17,66.03C29.65,66.56,28.93,66.86,28.18,66.86z"
          />
        </svg>
      </div>
      <div class="success-text">Your report for pothole is successfully logged !</div>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: "UploadImage",
  data() {
    return {
      title: "Description",
      submitted: false,
      description: '',
    };
  },
  methods: {
    closePopup() {
      document.getElementById("map-frame").style.height = "90vh";
      document.getElementById("description-block").classList.remove("show");
      document.getElementById("description-block").classList.add("hide");
      this.title = "Description";
      document.getElementsByClassName("text-block")[0].style.display = "block";
      document.getElementsByClassName("success-block")[0].style.display =
        "none";
    },
    submit() {
      this.title = "Success";
      document.getElementsByClassName("text-block")[0].style.display = "none";
      document.getElementsByClassName("success-block")[0].style.display =
        "block";
      const finalData = {
        coordinates: {
          latitude: sessionStorage.getItem('latitude'),
          longitude: sessionStorage.getItem('longitude')
        },
        imgDetails: {
          imageId: sessionStorage.getItem('imageId'),
          imageURL: sessionStorage.getItem('imageURL')
        },
        descriptionValue: this.description,
        userDetails: {
          userName: sessionStorage.getItem('userName'),
          phoneNumber: sessionStorage.getItem('phoneNumber')
        },
      };
      console.log(this.description);
      console.log(JSON.stringify(finalData));
      alert(JSON.stringify(finalData))
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
  padding-bottom: 20px;
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
    padding-top: 25px;
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
    margin: 10px;
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
  .success-icn {
    fill: #fff;
    background: #73ddc1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .success-text{
    width: 80vw;
    padding-top: 20px;
  }
  .success-block {
    margin: 25px 0px 25px 0px;
  }
}
</style>
      