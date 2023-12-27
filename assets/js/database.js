
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVZBd3yAYwLZN3msMszDlYqFupcLjMcHA",
    authDomain: "fooddatabase-4fcae.firebaseapp.com",
    projectId: "fooddatabase-4fcae",
    storageBucket: "fooddatabase-4fcae.appspot.com",
    messagingSenderId: "150088653320",
    appId: "1:150088653320:web:820190644ee2b0e47a4fbd",
    measurementId: "G-JCDQ63YCD2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
