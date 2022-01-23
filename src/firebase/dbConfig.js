
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbYJeEiXHhCoNwW_8cnSJxxg69jPwlJzo",
  authDomain: "la-madriguera-fdbaa.firebaseapp.com",
  projectId: "la-madriguera-fdbaa",
  storageBucket: "la-madriguera-fdbaa.appspot.com",
  messagingSenderId: "999480691009",
  appId: "1:999480691009:web:0bc6b6f62141051d34b9c0"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {

    return app

}

    
