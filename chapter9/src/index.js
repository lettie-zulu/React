import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXyqY-_rbPpMIopO_HlFywnHuaAU1B_VU",
  authDomain: "react-app-4ca93.firebaseapp.com",
  projectId: "react-app-4ca93",
  storageBucket: "react-app-4ca93.appspot.com",
  messagingSenderId: "718871355401",
  appId: "1:718871355401:web:aaaa64fdd08e604e7558d8",
  measurementId: "G-CCBQGWVHZ5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
