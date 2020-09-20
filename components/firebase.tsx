import * as firebase from "firebase/app";

import "firebase/auth";
 
const config = {
  apiKey: process.env.TRIAGED_API_KEY,
  authDomain: process.env.TRIAGED_AUTH_DOMAIN,
  databaseURL: process.env.TRIAGED_DATABASE_URL,
  projectId: process.env.TRIAGED_PROJECT_ID,
  storageBucket: process.env.TRIAGED_STORAGE_BUCKET,
  messagingSenderId: process.env.TRIAGED_MESSAGING_SENDER_ID,
  appId: process.env.TRIAGED_APP_ID,
  measurementId: process.env.TRIAGED_MEASUREMENT_ID
};
 
export default firebase.initializeApp(config);