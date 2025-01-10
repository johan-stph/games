import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {

  apiKey: "AIzaSyA_QwsNscEMtleCpRtKBFruxF-0lrbLE7Q",

  authDomain: "games-icyderdritte.firebaseapp.com",

  projectId: "games-icyderdritte",

  storageBucket: "games-icyderdritte.firebasestorage.app",

  messagingSenderId: "123028671977",

  appId: "1:123028671977:web:c7a3eae43b6e81a51d4f78"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;