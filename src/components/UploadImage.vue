<template>
  <div id="pull-up-block" class="pullUp">
    <div class="heading">
      <span class="upload-text">UPLOAD</span
      ><a @click="closePopup" class="close-icn">X</a>
    </div>
    <div class="btn-block">
      <div>
        <button class="upload-btn">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 72"
            style="enable-background: new 0 0 100 72"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  class="st0"
                  d="M93.75,8H29V1H11.5v7H6.25C3.35,8,1,10.35,1,13.25v52.5C1,68.65,3.35,71,6.25,71h87.5
			c2.9,0,5.25-2.35,5.25-5.25v-52.5C99,10.35,96.65,8,93.75,8z M15,4.5h10.5V8H15V4.5z M95.5,65.75c0,0.97-0.78,1.75-1.75,1.75H6.25
			c-0.97,0-1.75-0.78-1.75-1.75v-52.5c0-0.97,0.78-1.75,1.75-1.75h87.5c0.97,0,1.75,0.78,1.75,1.75V65.75z M64,18.5
			c-11.6,0-21,9.4-21,21c0,11.6,9.4,21,21,21c11.6,0,21-9.4,21-21C85,27.9,75.6,18.5,64,18.5z M64,57c-9.66,0-17.5-7.84-17.5-17.5
			C46.5,29.84,54.34,22,64,22s17.5,7.84,17.5,17.5C81.5,49.16,73.66,57,64,57z M64,29c-5.8,0-10.5,4.7-10.5,10.5
			C53.5,45.3,58.2,50,64,50c5.8,0,10.5-4.7,10.5-10.5C74.5,33.7,69.8,29,64,29z M64,46.5c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7
			S67.87,46.5,64,46.5z M88.5,15c-1.93,0-3.5,1.57-3.5,3.5c0,1.93,1.57,3.5,3.5,3.5c1.93,0,3.5-1.57,3.5-3.5
			C92,16.57,90.43,15,88.5,15z"
                />
              </g>
            </g>
          </svg>
        </button>
        <div class="text">Open Camera</div>
      </div>
      <div>
        <button class="upload-btn">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 108 72"
            style="enable-background: new 0 0 108 72"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  class="st0"
                  d="M106.65,16.94c-0.56-0.82-1.5-1.3-2.5-1.28l-17.72,0v-5.6c-0.01-1.63-1.32-2.95-2.95-2.95H35.33l0-3.07
			c0-1.68-1.36-3.04-3.03-3.04H7.44C5.78,1,4.43,2.34,4.41,4v3.11H3.78c-1.63,0.01-2.94,1.33-2.95,2.95v56.93
			c0.01,1.06,0.45,2.08,1.2,2.83c0.76,0.75,1.78,1.17,2.84,1.17l78.31,0c0.8,0.01,1.58-0.22,2.25-0.67
			c0.67-0.44,1.18-1.07,1.49-1.81l20.04-48.78C107.33,18.81,107.22,17.76,106.65,16.94z M7.3,4c0-0.08,0.06-0.14,0.14-0.14h24.85
			c0.04,0,0.07,0.01,0.1,0.04c0.03,0.03,0.04,0.06,0.04,0.1v3.11H7.3V4z M3.78,9.96l79.78,0.15v5.6H24.82
			c-1.22-0.03-2.33,0.7-2.8,1.83L3.78,62.01V9.96z M84.24,67.38c-0.18,0.43-0.6,0.71-1.06,0.71H4.87c-0.16,0-0.32-0.04-0.47-0.1
			l20.37-49.4l79.44,0.1L84.24,67.38z"
                />
              </g>
            </g>
          </svg>
        </button>
        <div class="text">Open File Manager</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "UploadImage",
  methods: {
    closePopup() {
      document.getElementById("pull-up-block").classList.remove("show");
      document.getElementById("pull-up-block").classList.add("hide");
    },
  },
};
</script>
  
  <style >
/* pullUp Styling */

.pullUp {
  width: 100vw;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
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
}

.pullUp.show {
  transform: translateY(0px);
  bottom: 45vh;
}
.pullUp.hide {
  transform: translateY(0px);
  bottom: 0vh;
}
.btn-block {
  display: flex;
  justify-content: center;
}
.btn-block .text {
  font-size: 14px;
  text-transform: capitalize;
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
}

.upload-btn svg{
  width: 55px;
  fill: #555;
}
.heading {
  padding-top: 30px;
  padding-bottom: 20px;
}
.heading .upload-text {
  padding-left: 20px;
}
.heading .close-icn {
  padding-right: 20px;
  float: right;
}
</style>
  