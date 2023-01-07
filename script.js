import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.15.0/firebase-database.js";

// import "https://cdn.firebase.com/js/client/2.2.1/firebase.js"
// import "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
// import { database } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY33x7PlCI9nm3mgYGmS4EqTGkNIJf0Qg",
  authDomain: "reev-db.firebaseapp.com",
  databaseURL:
    "https://reev-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reev-db",
  storageBucket: "reev-db.appspot.com",
  messagingSenderId: "834685354236",
  appId: "1:834685354236:web:a141f5764aee6150711779",
  measurementId: "G-7W7392CDKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const db = getDatabase();

var brel = document.getElementById("brel");
var ierel = document.getElementById("ierel");
var mct = document.getElementById("mct");
var soc = document.getElementById("soc");
var mt = document.getElementById("mt");
var abv = document.getElementById("abv");
var bv = document.getElementById("bv");


var brelv = ref(db, "Relay/Battery_Relay");
var ierelv = ref(db, "Relay/IC_Engine_Relay");
var mctv = ref(db, "Temperature/Motor_Controller_Temperature");
var socv = ref(db, "Voltage/SOC");
var mtv = ref(db, "Temperature/Motor_Temperature");
var abvv = ref(db, "Voltage/Auxiliary_Battery_Voltage");
var bvv = ref(db, "Voltage/Battery_Voltage");
onValue(brelv, async (snap) => {
  if (await snap.val()=="1"){
    brel.textContent = "ON"
    brel.style.color="#3eff51"
    brel.style.textShadow="1px 1px 10px #1bea1b, 1px 1px 10px #0f810b"
    // brel.colo
  }
  else{
    brel.textContent = "OFF";
    brel.style.color="red"
    brel.style.textShadow="1px 1px 10px #ea1b1b, 1px 1px 10px #810b0b"

  }
});
onValue(ierelv, async (snap) => {
  if (await snap.val()=="1"){
    ierel.textContent = "ON"
    ierel.style.color="#3eff51";
    ierel.style.textShadow="1px 1px 10px #1bea1b, 1px 1px 10px #0f810b"
    // 1px 1px 10px #1bea1b, 1px 1px 10px #0f810b
  }
  else{
    ierel.textContent = "OFF";
    ierel.style.color="red";
    ierel.style.textShadow="1px 1px 10px #ea1b1b, 1px 1px 10px #810b0b"
  }
});


onValue(mctv, async (snap) => {
    mct.textContent = await snap.val() + "°C";

});
onValue(socv, async (snap) => {
    soc.textContent = await snap.val();

});
onValue(mtv, async (snap) => {
    mt.textContent = await snap.val()+ "°C";

});
onValue(abvv, async (snap) => {
    abv.textContent = await snap.val()+ "V";

});
onValue(bvv, async (snap) => {
    bv.textContent = await snap.val() + "V";

});
