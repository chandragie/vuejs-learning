// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "tutorial-spa.firebaseapp.com",
    projectId: "tutorial-spa",
    storageBucket: "tutorial-spa.appspot.com",
    messagingSenderId: "",
    appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const dbRef = db.ref('datas');
