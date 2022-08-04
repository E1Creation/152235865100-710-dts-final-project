import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbHehIhK91PrGQUJPM0YBTW72ehgceSOM",
  authDomain: "digital-talent-project.firebaseapp.com",
  projectId: "digital-talent-project",
  storageBucket: "digital-talent-project.appspot.com",
  messagingSenderId: "979388816138",
  appId: "1:979388816138:web:ed69b5c7dafc2638ed78f3",
  measurementId: "G-BH57HP09PT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const authCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(`User login : ${authCredential.user}`);
  } catch (error) {
    console.log(`Full Error:${error}`);
    console.log(`error message: ${error.message}`);
    console.log(`error auth :  ${error.auth}`);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const authCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(`User login : ${authCredential.user}`);
  } catch (error) {
    console.log(`Full Error:${error}`);
    console.log(`error message: ${error.message}`);
    console.log(`error auth :  ${error.auth}`);
  }
};
const logOut = async () => {
  try {
    await signOut(auth);
    console.log("Logout berhasil");
  } catch (error) {
    console.log(`Full Error:${error}`);
    console.log(`error message: ${error.message}`);
    console.log(`error auth :  ${error.auth}`);
  }
};

export {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logOut,
};
