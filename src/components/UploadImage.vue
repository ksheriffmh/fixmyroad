<template>
  <div id="pull-up-block" class="pull-up">
    <div class="heading">
      <span class="upload-text">UPLOAD</span><a @click="closePopup" class="close-icn">X</a>
    </div>
    <div class="btn-block" v-show="!isCameraOpen">
      <div>
        <input type="file" ref="file" accept="image/*" class="input-file" hidden @change="downloadImage" />
        <button class="upload-btn" @click="uploadFile">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 100 72" style="enable-background: new 0 0 100 72" xml:space="preserve">
            <g>
              <g>
                <path class="st0" d="M93.75,8H29V1H11.5v7H6.25C3.35,8,1,10.35,1,13.25v52.5C1,68.65,3.35,71,6.25,71h87.5
			c2.9,0,5.25-2.35,5.25-5.25v-52.5C99,10.35,96.65,8,93.75,8z M15,4.5h10.5V8H15V4.5z M95.5,65.75c0,0.97-0.78,1.75-1.75,1.75H6.25
			c-0.97,0-1.75-0.78-1.75-1.75v-52.5c0-0.97,0.78-1.75,1.75-1.75h87.5c0.97,0,1.75,0.78,1.75,1.75V65.75z M64,18.5
			c-11.6,0-21,9.4-21,21c0,11.6,9.4,21,21,21c11.6,0,21-9.4,21-21C85,27.9,75.6,18.5,64,18.5z M64,57c-9.66,0-17.5-7.84-17.5-17.5
			C46.5,29.84,54.34,22,64,22s17.5,7.84,17.5,17.5C81.5,49.16,73.66,57,64,57z M64,29c-5.8,0-10.5,4.7-10.5,10.5
			C53.5,45.3,58.2,50,64,50c5.8,0,10.5-4.7,10.5-10.5C74.5,33.7,69.8,29,64,29z M64,46.5c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7
			S67.87,46.5,64,46.5z M88.5,15c-1.93,0-3.5,1.57-3.5,3.5c0,1.93,1.57,3.5,3.5,3.5c1.93,0,3.5-1.57,3.5-3.5
			C92,16.57,90.43,15,88.5,15z" />
              </g>
            </g>
          </svg>
        </button>
        <div class="text">Upload Media</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      enableUpload: false,
      link: "#",
      buttonName: "Capture",
    };
  },
  methods: {
    closePopup() {
      this.buttonName = "Capture";
      this.isCameraOpen = false;
      this.isPhotoTaken = false;
      this.isShotPhoto = false;
      this.isLoading = false;
      this.enableUpload = false;
      document.getElementById("map-frame").style.height = "90vh";
      document.getElementById("pull-up-block").classList.remove("show");
      document.getElementById("pull-up-block").classList.add("hide");
      document.getElementById("report-btn").classList.remove("d-none");
    },

    uploadFile() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },

    async downloadImage(event) {
      let files = event.target.files[0];
      console.log(typeof files);
      
      let reader = new FileReader();
      reader.onload = function(base64) {
        const fileId = `Case_${Math.floor(1 + Math.random() * (100000 - 1))}`;
        sessionStorage.setItem('imageId', fileId);
        sessionStorage.setItem('imageURL', base64.target.result);
      }
      reader.readAsDataURL(files);

      alert("Image uploaded successfully!");
      document.getElementById("map-frame").style.height = "60vh";
      document.getElementById("pull-up-block").classList.remove("show");
      document.getElementById("location-block").classList.remove("hide");
      document.getElementById("location-block").classList.add("show");
    },

    uploadToServer(formData) {
      console.log("uploadtoserver", formData);
    }
  }
};
</script>

<style lang="scss">
.pull-up {
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
  transform: translateY(45vh);
  transition: all 0.5s ease-in-out;
  padding-bottom: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &.show {
    transform: translateY(0px);
  }

  &.hide {
    transform: translateY(0px);
    bottom: -45vh;
  }

  .btn-block {
    display: flex;
    justify-content: center;
    .text {
      font-size: 14px;
      text-transform: capitalize;
    }
  }

  .upload-btn {
    width: 125px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    color: #000;
    border: 0px;
    background: #f2f3f5;

    svg {
      width: 55px;
      fill: #555;
    }
  }

  .heading {
    padding-top: 30px;
    padding-bottom: 20px;
    font-weight: 700;

    .upload-text {
      padding-left: 20px;
    }

    .close-icn {
      padding-right: 20px;
      float: right;
    }
  }
}
</style>