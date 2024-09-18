// function hello(){
//     var UserName = document.getElementById("text");
//     var PhoneNumber = document.getElementById("password");
//     var Email = document.getElementById("email");
//     var password = document.getElementById("pass");

//     if (Email === 'rabnawazz2000@gmail.com' && password == 123456) {
//        alert("Succees full !");
//         window.location.assign("index.html");
//      }
//      else{
//         alert("Wrong Entry Invalid");
//      }
// }

//       // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
//   import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyCrQG-lZ0acuUHWSWd80VuIhK-btWiLB5k",
//     authDomain: "smit-2a8a5.firebaseapp.com",
//     projectId: "smit-2a8a5",
//     storageBucket: "smit-2a8a5.appspot.com",
//     messagingSenderId: "1050520809744",
//     appId: "1:1050520809744:web:602d037d988988b779b595"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getDatabase(app);

//   document.getElementById("submit").addEventListener('click', function(e){
//     e.preventDefault();
//     set(ref(db, 'user/' + document.getElementById("text").value),
//     {
//         text: document.getElementById("text"),
//         password:document.getElementById("passward"),
//         email: document.getElementById("email"),
//         pass:document.getElementById("pass"),
//   });
//       alert("Login Succeeful !")
//   })

