import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
	apiKey: "AIzaSyDd21QtK3SBWdLL3xBaOg5g6D1t9awBD8I",
	authDomain: "gotomeals-bc6ee.firebaseapp.com",
	projectId: "gotomeals-bc6ee",
	storageBucket: "gotomeals-bc6ee.appspot.com",
	messagingSenderId: "645451094273",
	appId: "1:645451094273:web:8d9a9c9505df8c09a7a300",
	measurementId: "G-KE6QRNFKK2",
};

let HAS_INITIALIZED = false;

export const initFirebase = () => {
	if (!HAS_INITIALIZED) {
		initializeApp(firebaseConfig);
		HAS_INITIALIZED = true;
	}
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
