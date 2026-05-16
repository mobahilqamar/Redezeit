const firebaseConfig = {
  apiKey: "AIzaSyD-E30zNS7AHsE80DajvFNPFq98GC2qSps",
  authDomain: "redezeit-timer.firebaseapp.com",
  databaseURL: "https://redezeit-timer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "redezeit-timer",
  storageBucket: "redezeit-timer.firebasestorage.app",
  messagingSenderId: "633338790844",
  appId: "1:633338790844:web:888f99b1fb00f3675861b9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const timerRef = db.ref("redezeitTimer");