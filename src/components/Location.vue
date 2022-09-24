<template>
  <div id="location-block" class="location">
    <div class="heading">
      <span class="location-text">LOCATION</span
      ><a @click="closePopup" class="close-icn">X</a>
    </div>
    <div class="btn-block">
      <div>
        <button class="location-btn">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 101.74 111.93"
            style="enable-background: new 0 0 101.74 111.93"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M50.92,2C36.41,2,24.59,13.59,24.59,28.41c0,10.05,4.37,20.4,10.27,31.48l0,0c-0.08-0.02-0.16-0.03-0.24-0.04
	H22.08c-0.08-0.01-0.16-0.01-0.24,0c-0.43,0.08-0.78,0.38-0.94,0.79L2.09,108.43v0c-0.16,0.39-0.11,0.83,0.13,1.18
	c0.24,0.35,0.63,0.55,1.05,0.55h95.31c0.42,0,0.81-0.2,1.05-0.55c0.24-0.35,0.28-0.79,0.13-1.18L80.94,60.64v0
	c-0.19-0.48-0.66-0.79-1.18-0.79H67.22c-0.08,0.01-0.16,0.02-0.24,0.04c5.9-11.08,10.27-21.43,10.27-31.48
	C77.25,13.59,65.43,2,50.92,2L50.92,2z M50.92,4.52c13.19,0,23.83,10.41,23.83,23.9c0,15.89-12.38,33.92-23.83,55.26
	C39.47,62.33,27.09,44.3,27.09,28.41C27.09,14.93,37.73,4.52,50.92,4.52L50.92,4.52z M50.92,13.32c-6.22,0-11.29,5.08-11.29,11.32
	c0,6.24,5.07,11.32,11.29,11.32c6.22,0,11.29-5.08,11.29-11.32C62.21,18.4,57.14,13.32,50.92,13.32z M50.92,15.83
	c4.86,0,8.78,3.93,8.78,8.8s-3.92,8.8-8.78,8.8c-4.86,0-8.78-3.93-8.78-8.8S46.06,15.83,50.92,15.83z M35.79,61.58
	c4.32,7.97,9.31,16.32,14.03,25.27v0c0.22,0.4,0.64,0.65,1.1,0.65c0.46,0,0.88-0.25,1.1-0.65c4.71-8.94,9.71-17.27,14.03-25.23
	c0.21,0.46,0.67,0.76,1.18,0.75H78.9l8.43,21.38H76v0c-0.08-0.01-0.16-0.01-0.23,0c-0.69,0.07-1.2,0.68-1.14,1.38
	c0.06,0.69,0.68,1.2,1.37,1.14h12.3l8.43,21.38H52.17V97.58h0c0.01-0.37-0.13-0.73-0.41-0.98c-0.27-0.25-0.64-0.37-1.01-0.32
	c-0.65,0.08-1.12,0.64-1.1,1.3v10.06H5.11l8.43-21.38h12.31c0.34,0,0.66-0.13,0.9-0.36c0.24-0.24,0.37-0.56,0.37-0.9
	c0-0.34-0.13-0.66-0.37-0.9c-0.24-0.24-0.56-0.37-0.9-0.36H14.52l8.43-21.38h11.68v0C35.14,62.38,35.6,62.06,35.79,61.58
	L35.79,61.58z"
            />
          </svg>
        </button>
        <div class="text">My Location</div>
      </div>
      <div>
        <button class="location-btn" @click="spotLocation">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 101.74 111.93"
            style="enable-background: new 0 0 101.74 111.93"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M49.27,44.67C38.49,43.85,30,34.85,30,23.86c0-11.53,9.35-20.87,20.87-20.87c11.53,0,20.87,9.34,20.87,20.87
	c0,10.99-8.49,19.99-19.27,20.81v28.96h20.87c0.52,0,1.01,0.26,1.32,0.69l22.48,32.11c0.75,1.06-0.02,2.53-1.32,2.53H5.91
	c-1.3,0-2.06-1.46-1.32-2.53l22.48-32.11c0.3-0.43,0.79-0.69,1.31-0.69h20.87L49.27,44.67z M50.87,41.52
	c9.75,0,17.66-7.91,17.66-17.66c0-9.75-7.91-17.66-17.66-17.66s-17.66,7.91-17.66,17.66C33.21,33.61,41.12,41.52,50.87,41.52z
	M49.27,76.84H29.23L9,105.73h83.74l-20.23-28.9H52.47v14.45c0,0.89-0.72,1.61-1.61,1.61s-1.61-0.72-1.61-1.61L49.27,76.84z
	M60.5,23.86c0,0.89-0.72,1.61-1.61,1.61c-0.89,0-1.61-0.72-1.61-1.61c0-3.55-2.87-6.42-6.42-6.42c-0.89,0-1.61-0.72-1.61-1.61
	s0.72-1.61,1.61-1.61C56.19,14.23,60.5,18.54,60.5,23.86L60.5,23.86z"
            />
          </svg>
        </button>
        <div class="text">Spot In Map</div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "UploadImage",
  methods: {
    closePopup() {
      document.getElementById("map-frame").style.height="90vh";
      document.getElementById("location-block").classList.remove("show");
      document.getElementById("location-block").classList.add("hide");
    },
    spotLocation() {
      document.getElementById("location-block").classList.add("hide");
      document.getElementById("user-details-block").classList.remove("hide");
      document.getElementById("user-details-block").classList.add("show");
      navigator.geolocation.getCurrentPosition(position => {
        sessionStorage.setItem('latitude', position.coords.latitude);
        sessionStorage.setItem('longitude', position.coords.longitude);
      });
    },
  },
};
</script>
    
    <style lang="scss">
/* location Styling */

.location {
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

  .btn-block {
    display: flex;
    justify-content: center;
    .text {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
  .location-btn {
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
    .location-text {
      padding-left: 20px;
    }
    .close-icn {
      padding-right: 20px;
      float: right;
    }
  }
}
</style>
    