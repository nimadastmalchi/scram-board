import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "scramboard.firebaseapp.com",
  databaseURL: "https://scramboard-default-rtdb.firebaseio.com",
  projectId: "scramboard",
  storageBucket: "scramboard.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);