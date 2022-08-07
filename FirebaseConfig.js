import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBbFaZCiLFeUNV4S1U-u_7m5xFe7q7lhxk",
  authDomain: "project1-9215c.firebaseapp.com",
  projectId: "project1-9215c",
  storageBucket: "project1-9215c.appspot.com",
  messagingSenderId: "54844468941",
  appId: "1:54844468941:web:b5ee70e97d626ff5f00384",
  measurementId: "G-VZFB8BG1LN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebaseConfig;
