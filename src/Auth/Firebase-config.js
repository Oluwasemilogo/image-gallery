import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJtCwXZfsqOJveS63xcPA8Ciz6I5pU2F4",
  authDomain: "image-gallery-bd2bd.firebaseapp.com",
  projectId: "image-gallery-bd2bd",
  storageBucket: "image-gallery-bd2bd.appspot.com",
  messagingSenderId: "973611453299",
  appId: "1:973611453299:web:b9376b25530b84ead5d306",
  measurementId: "G-L2G7FD3BNL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);