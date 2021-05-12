var firebaseConfig = {
    apiKey: "AIzaSyAPlw0M8LduDzT2h6qgfLiuJC_G6ecxswA",
    authDomain: "project94-41b26.firebaseapp.com",
    databaseURL: "https://project94-41b26-default-rtdb.firebaseio.com",
    projectId: "project94-41b26",
    storageBucket: "project94-41b26.appspot.com",
    messagingSenderId: "697010781397",
    appId: "1:697010781397:web:359695d20412dab3c7765c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

      function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + room_name);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)> #" + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}