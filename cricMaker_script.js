var firebaseConfig = {
    apiKey: "AIzaSyB8rojCvF9G1zI4i6k3DlYbeAj1YQsn2xo",
    authDomain: "cricmaker-login.firebaseapp.com",
    databaseURL: "https://cricmaker-login.firebaseio.com",
    projectId: "cricmaker-login",
    storageBucket: "cricmaker-login.appspot.com",
    messagingSenderId: "408244885839",
    appId: "1:408244885839:web:bafc80d0e100c85ae80d3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function register(){
    var firstName=document.getElementById("fname");
    var lastName=document.getElementById("lname");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));
      alert("Successfully Registration!");
    document.location.href="index.html";
}