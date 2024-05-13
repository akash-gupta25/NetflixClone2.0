import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgVPOvS1-s5jRn2xCcX_wkYa21ECiEgrg",
  authDomain: "netflix-clone-6f73c.firebaseapp.com",
  projectId: "netflix-clone-6f73c",
  storageBucket: "netflix-clone-6f73c.appspot.com",
  messagingSenderId: "70276393334",
  appId: "1:70276393334:web:46e9f56a7b429e9fad3257"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);



