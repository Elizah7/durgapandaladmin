
import firebase from "firebase/app"
const Firebaseauth = firebase.initializeApp({
    apiKey : process.env.REACT_APP_APIKEY,
    authDomain : process.env.REACT_APP_AUTHDOMAIN,
    projectId : process.env.REACT_APP_PROJECTID,
    storageBucket : process.env.REEACT_APP_STORAGEBUCKET,
    measurementId : process.env.REEACT_APP_MESSAGINGSENDERID,
    appId : process.env.REEACT_APP_APPID
})

export default Firebaseauth
