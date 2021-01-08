// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBNbBi3BjCINWnaee4Y6jl_Mkw_cHHdbxM",
    authDomain: "tutorial-spa.firebaseapp.com",
    projectId: "tutorial-spa",
    storageBucket: "tutorial-spa.appspot.com",
    messagingSenderId: "556518877249",
    appId: "1:556518877249:web:a86249e5a60f897139fec0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const dbRef = db.ref('datas');