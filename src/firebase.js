import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDnWp7KP8TcInbuyPinOAO3woHJVZz5FAg",
    authDomain: "fir-crud-demo-20dd3.firebaseapp.com",
    databaseURL: "https://fir-crud-demo-20dd3-default-rtdb.firebaseio.com",
    projectId: "fir-crud-demo-20dd3",
    storageBucket: "fir-crud-demo-20dd3.appspot.com",
    messagingSenderId: "751645438962",
    appId: "1:751645438962:web:83a8a7f39b9df66118b16b"
  };
  // Initialize Firebase
  let fireDB=firebase.initializeApp(firebaseConfig);
  export default fireDB.database().ref();