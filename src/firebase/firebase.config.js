// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

/* visit:vite environment variable .. package.json file select kore create korlam .env

* console.log('inside firebase config',import.meta.env.VITE_PASS) ...VITE_PASS ayta .env file teke.
  console deko. erpor cotation chaara apiKey ta copy kore go to .env
*
** avabe ... apiKey: import.meta.env.VITE_APIKEY,   avabe na korre total key/id aksate copy korbo
  kore go to .env
*
*
 
*/