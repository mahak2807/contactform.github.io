
  var firebaseConfig = {
    apiKey: "AIzaSyAtFNhADUGMVYsSdxtf_hvE943lCqTBgwY",
    authDomain: "contactform-943e3.firebaseapp.com",
    databaseURL: "https://contactform-943e3.firebaseio.com",
    projectId: "contactform-943e3",
    storageBucket: "contactform-943e3.appspot.com",
    messagingSenderId: "219363008549",
    appId: "1:219363008549:web:fc54e7851bde12779e1fcc",
    measurementId: "G-J7H5T5QJKR"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.database();

    //reference messages collection
  var contactref=firebase.database().ref('messages');




  document.getElementById('displayform').addEventListener('submit',submitForm);


  //submit form

  function submitForm(e){
    e.preventDefault();
    //get values
    var firstname = getInputVal('first');
    var lastname = getInputVal('second');
    var contactno = getInputVal('number');
    var dob = getInputVal('birth');
    var email = getInputVal('mail');
    var message = getInputVal('message');

    saveForm(firstname,lastname,contactno,dob,email,message);  
  }
  function getInputVal(id){
    return document.getElementById(id).value;
      
  }
  function saveForm(firstname,lastname,contactno,dob,email,message){
    var newContactRef= contactref.push();
    newContactRef.set({
      firstname:firstname,
      lastname:lastname,
      contactno:contactno,
      dob:dob,
      email:email,
      message:message

    });
  }
