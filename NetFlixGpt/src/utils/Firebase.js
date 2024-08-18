// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAry4CDYY5CQxYeOesFUFgzys3fd5k7u5Q",
  authDomain: "netflixgpt-f3307.firebaseapp.com",
  projectId: "netflixgpt-f3307",
  storageBucket: "netflixgpt-f3307.appspot.com",
  messagingSenderId: "247723338062",
  appId: "1:247723338062:web:f3bce6d31d87ef8e13961f",
  measurementId: "G-DMK99S4MVN",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth()
export default auth
