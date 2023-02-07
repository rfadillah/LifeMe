import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE0Q0xLkoFnnIsTOQsNPkg8LZ_yJn4iHI",
  authDomain: "lifeme2-846f5.firebaseapp.com",
  projectId: "lifeme2-846f5",
  storageBucket: "lifeme2-846f5.appspot.com",
  messagingSenderId: "24887961425",
  appId: "1:24887961425:web:5e02b3279f5abfab395570",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
