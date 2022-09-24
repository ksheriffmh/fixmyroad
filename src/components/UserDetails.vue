<template>
  <div id="user-details-block" class="user-details">
    <div class="heading">
      <span class="user-details-text">{{ title }}</span>
      <a @click="closePopup" class="close-icn">X</a>
    </div>
    <div class="text-name">
      <input type="text" class="user-name" placeholder="Your Name" v-model="userName" />
      <input type="number" class="user-num" placeholder="Your Number" v-model="userNumber" @keyup="validatePhoneNumber"/>
      <span class="error-message" v-if="!isValidPhoneNumber">Enter the valid phone number</span>
      <div class="toggle-text">
        <span> Keep me Anonymous </span>
        <input type="checkbox" id="myCheck" value="myvalue" class="isuser">
      </div>
      <button :class="isValidPhoneNumber ? 'continue-btn' : 'disabled-btn'" :disabled="isValidPhoneNumber===false" @click="submit">Continue</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  data() {
    return {
      title: "Your Information",
      userName: '',
      userNumber: '',
      isValidPhoneNumber: false,
      submitted: false,
    };
  },
  methods: {
    closePopup() {
      document.getElementById("map-frame").style.height = "90vh";
      document.getElementById("user-details-block").classList.remove("show");
      document.getElementById("user-details-block").classList.add("hide");
      document.getElementById("report-btn").classList.remove("d-none");
      this.title = "Your Information";
      document.getElementsByClassName("text-block")[0].style.display = "block";
      document.getElementsByClassName("success-icn")[0].style.display = "none";
    },
    validatePhoneNumber() {
      const validationRegex = /^\d{10}$/;
      if (this.userNumber.toString().match(validationRegex)) {
        this.isValidPhoneNumber = true;
      } else {
        this.isValidPhoneNumber = false;
      }
      console.log(this.isValidPhoneNumber);
    },
    submit() {
      document.getElementById("user-details-block").classList.add("hide");
      document.getElementById("description-block").classList.remove("hide");
      document.getElementById("description-block").classList.add("show");
      sessionStorage.setItem('userName', this.userName);
      sessionStorage.setItem('phoneNumber', this.userNumber);
    },
  },
};
</script>

<style lang="scss">
/* description Styling */

.user-details {
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
  padding-bottom: 20%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  &.show {
    transform: translateY(0px);
  }
  &.hide {
    transform: translateY(0px);
    bottom: -55vh;
  }

  .heading {
    padding: 25px 25px 15px 25px;
    width: 100vw;
    font-weight: 700;
    .user-details-text {
      padding-left: 20px;
    }
    .close-icn {
      padding-right: 20px;
      float: right;
    }
  }
  .text-name {
    margin: 13px 25px 50px 25px;
    padding: 5px;
    height: 30vw;
    width: 90vw;
    border-radius: 10px;
    border: 0;
    line-height: 1.5;
    .user-name {
      width: 100%;
      display: inline-block;
      border-radius: 10px;
      padding: 14px;
      box-sizing: border-box;
      margin-bottom: 8px;
      border: 1px solid #f2f3f5;
    }
    .user-num {
      width: 100%;
      display: inline-block;
      border-radius: 10px;
      padding: 14px;
      box-sizing: border-box;
      border: 1px solid #f2f3f5;
    }
    .error-message {
      font-size: 12px;
      color: #FF9494;
    }
    .toggle-text {
        display: flex;
        justify-content: space-between;
        .isuser {
          width: 16px;
          height: 16px;
        }
    }
  }
  .continue-btn {
    font-family: "Montesserat", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    background: #73ddc1;
    border: 0;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    width: 90vw;
    height: 60px;
    padding: 5px;
    position: absolute;
    left: 20px;
    right: 0;
    bottom: 10px;
  }
  .disabled-btn {
    font-family: "Montesserat", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    background: grey;
    border: 0;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    width: 90vw;
    height: 60px;
    padding: 5px;
    position: absolute;
    left: 20px;
    right: 0;
    bottom: 10px;
  }
}
</style>