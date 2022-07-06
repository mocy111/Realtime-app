import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC0zkmq7uOlnjiaxytVdKgjj1VBM1glDMM",
    authDomain: "realtime-app-d0e61.firebaseapp.com",
    projectId: "realtime-app-d0e61",
    storageBucket: "realtime-app-d0e61.appspot.com",
    messagingSenderId: "545675008141",
    appId: "1:545675008141:web:09455264c078c647bb2ac4"
  };

  class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth();
        this.db = app.firestore()
        
    
    
    }

    // inscription
    signUpUser = (email,password) =>
        this.auth.createUserWithEmailAndPassword(email,password);

        // conexion 

        loginUser = (email,password) => 
        this.auth.signInWithEmailAndPassword(email,password)
        
        
    // deconexion 
    signOutUser = () => this.auth.signOut()



}


export default Firebase