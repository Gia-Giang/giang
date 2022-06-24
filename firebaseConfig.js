import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDfgbrkiBH_mRIQUWEikrzlbNcYUAo175Y",
    authDomain: "personnel-dc1a5.firebaseapp.com",
    projectId: "personnel-dc1a5",
    storageBucket: "personnel-dc1a5.appspot.com",
    messagingSenderId: "918404279638",
    appId: "1:918404279638:web:7f86956016471829763af7",
    measurementId: "G-40XBET7HYP"
};
const firebaseConnect = initializeApp(firebaseConfig);
export default firebaseConnect;  