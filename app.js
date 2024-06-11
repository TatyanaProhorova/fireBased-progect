// В данном случае мы не используем бандлеры, поэтому в импорте нужно указывать ссылки на веб-ресурсы Firebase
import { firebaseConfig } from "firebaseConfig";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Это конфигурация Firebase, у каждого проекта она своя. Её нужно скопировать из консоли вашего проекта
const firebaseConfig = {
  apiKey: "AIzaSyAscDWvT-xfNnrUjVlddeu2u5OHCf7BI2Q",
  authDomain: "study-fb864.firebaseapp.com",
  projectId: "study-fb864",
  storageBucket: "study-fb864.appspot.com",
  messagingSenderId: "132116981664",
  appId: "1:132116981664:web:680e87ea426d2ddab3e6c5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");
const signupEmailInput = document.getElementById("signupEmail");
const signupPasswordInput = document.getElementById("signupPassword");
const signinEmailInput = document.getElementById("signinEmail");
const signinPasswordInput = document.getElementById("signinPassword");
// const message = document.getElementById("message");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  try {
       await createUserWithEmailAndPassword(auth, email, password);
    message.textContent = "Account created successfully!";
   
  } catch (error) {
    message.textContent = error.message;
  }
});


signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signinEmailInput.value;
  const password = signinPasswordInput.value;

  try {
 
    await signInWithEmailAndPassword(auth, email, password);
    message.textContent = "Logged in successfully!";

  } catch (error) {
    message.textContent = error.message;
  }
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAscDWvT-xfNnrUjVlddeu2u5OHCf7BI2Q",
//   authDomain: "study-fb864.firebaseapp.com",
//   projectId: "study-fb864",
//   storageBucket: "study-fb864.appspot.com",
//   messagingSenderId: "132116981664",
//   appId: "1:132116981664:web:680e87ea426d2ddab3e6c5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);