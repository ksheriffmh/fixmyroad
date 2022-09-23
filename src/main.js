import { createApp } from 'vue'
import Home from './Home.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUavfmA-f2U314DxtyvI6XEI_1Q1wbDI",
  authDomain: "fixmyroad-1db86.firebaseapp.com",
  projectId: "fixmyroad-1db86",
  storageBucket: "fixmyroad-1db86.appspot.com",
  messagingSenderId: "282885597864",
  appId: "1:282885597864:web:89d1182f603a3a7351f09d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(Home).mount('#app')
