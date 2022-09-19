// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtbkxFu_DfHa62bs39kaGTAcVKunHkxA",
  authDomain: "kwitstagram.firebaseapp.com",
  databaseURL: "https://kwitstagram-default-rtdb.firebaseio.com",
  projectId: "kwitstagram",
  storageBucket: "kwitstagram.appspot.com",
  messagingSenderId: "1040303550078",
  appId: "1:1040303550078:web:52e296b88a8bb8726f322f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("user_name");
document.getElementById("userconfirm").innerHTML = "welcome" + user_name + "!" ;
function getData() 
{firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) 
 {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
    console.log("Room Name - " + Room_names) ;
   
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row; });

      //End code
      });}
getData();

function roomselect() {

    room_name = document.getElementById("UserInput").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding user"

 
    
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name" ,name);
   window.location = "kwitter_page.html";
   

}

function logoutie() {  
   localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html" ;
}
