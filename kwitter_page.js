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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like:0
  });
  
  document.getElementById("msg").value = "";
        }