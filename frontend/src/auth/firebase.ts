import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";




//these are not a security risk see
//https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
//https://firebase.google.com/docs/projects/api-keys
//but still could be nicer if it were not hard coded
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