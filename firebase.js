  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore, setDOC, doc} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-Firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCrQG-lZ0acuUHWSWd80VuIhK-btWiLB5k",
    authDomain: "smit-2a8a5.firebaseapp.com",
    projectId: "smit-2a8a5",
    storageBucket: "smit-2a8a5.appspot.com",
    messagingSenderId: "1050520809744",
    appId: "1:1050520809744:web:602d037d988988b779b595"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId){
    var messageDiv=document.getElementById(signUpMessage);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }


  const Login= document.getElementById("submit");
  Login.addEventListener('click', (event)=>{
  event.preventDefault();

  const UserName = document.getElementById("text");
  const PhoneNumber=document.getElementById("passward");
  const email =document.getElementById("email");
  const passward = document.getElementById("pass");

  const auth=getAuth();
  const db=getFirestore();

  createUserWithEmailAndPassword(auth, email, passward)
  .then((userCredential)=>{
    const user=userCredential.user;
    const userData={
        UserName: UserName,
        PhoneNumber: PhoneNumber,
        email: email,
        passward: passward,
    };
    showMessage('Account Created Successfully', 'signUpMessage');
    const docRef=doc(db, "users", user.uid);
    setDoc(docRef,userData)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error("error writing document", error);

    });
})
.catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/email-already-in-use'){
        showMessage('Email Address Already Exists !!!', 'signUpMessage');
    }
    else{
        showMessage('unable to create User', 'signUpMessage');
    }
})
});

const login=document.getElementById('submit');
signIn.addEventListener('click', (event)=>{
event.preventDefault();

  const UserName = document.getElementById("text");
  const PhoneNumber=document.getElementById("passward");
  const email=document.getElementById('email');
  const password=document.getElementById('pass');
  
  const auth=getAuth();

signInWithEmailAndPassword(auth, email,password)
.then((userCredential)=>{
    showMessage('login is successful', 'signInMessage');
    const user=userCredential.user;
    localStorage.setItem('loggedInUserId', user.uid);
    window.location.href='./index.html';
})
.catch((error)=>{
    const errorCode=error.code;
    if(errorCode==='auth/invalid-credential'){
        showMessage('Incorrect Email or Password', 'signInMessage');
    }
    else{
        showMessage('Account does not Exist', 'signInMessage');
    }
})
})

  