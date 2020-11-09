import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

// we need to somehow seed teh database

//we need a config here

const config = {
    apiKey: "AIzaSyB34WePJCYdwThBej-WRvpQsmOCtWX6YXQ",
    authDomain: "netflix-clone-90e09.firebaseapp.com",
    databaseURL: "https://netflix-clone-90e09.firebaseio.com",
    projectId: "netflix-clone-90e09",
    storageBucket: "netflix-clone-90e09.appspot.com",
    messagingSenderId: "749712238048",
    appId: "1:749712238048:web:251b00475d52cb080cb785"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };