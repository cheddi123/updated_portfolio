

src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCA41ZpJSXMJXFlfaAv46w6qPKyNQ3H_rE",
    authDomain: "contact-information-55c91.firebaseapp.com",
    databaseURL: "https://contact-information-55c91.firebaseio.com",
    projectId: "contact-information-55c91",
    storageBucket: "contact-information-55c91.appspot.com",
    messagingSenderId: "268494525365"
  };
  firebase.initializeApp(config);

  var data_ref = firebase.database();
 // on click event to submit the contact information into firebase DB
  $("#contact-information").on("click",function(event){
    event.preventDefault();

    var name = $("#name").val();
    var email =$("#email").val();
    var message = $("#message").val();

    // object to hold contact information
    var contact_information={
       name,
       email,
       message,
       dateAdded: firebase.database.ServerValue.TIMESTAMP

    };

    // push the data into database
    data_ref.ref().push(contact_information);
    console.log("you clicked me")

    // clears the fields after submit
   $("#name").val("");
    $("#email").val("");
    $("#message").val("");



  })