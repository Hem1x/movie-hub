// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxMTuUOxi1Kp52zObOW2vvu3vUu4cMoZI',
  authDomain: 'movie-df9b0.firebaseapp.com',
  projectId: 'movie-df9b0',
  storageBucket: 'movie-df9b0.appspot.com',
  messagingSenderId: '865304299622',
  appId: '1:865304299622:web:aa27ecbbec82b7aa3805a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
