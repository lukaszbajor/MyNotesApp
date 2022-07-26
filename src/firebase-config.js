import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGxmKkLy0Vr6OBz_u7Sj7V4YTmIAPEbak",
  authDomain: "notesandtasksapp.firebaseapp.com",
  projectId: "notesandtasksapp",
  storageBucket: "notesandtasksapp.appspot.com",
  messagingSenderId: "522995104858",
  appId: "1:522995104858:web:03d6d8de8def52d769ac63",
  measurementId: "G-HD7NELY05W",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
