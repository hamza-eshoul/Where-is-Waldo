import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyCe2VNh6gQiQQ8zUhE4kVnU4sM-OTIwhbo",
  authDomain: "photo-tagging-app-ad275.firebaseapp.com",
  projectId: "photo-tagging-app-ad275",
  storageBucket: "photo-tagging-app-ad275.appspot.com",
  messagingSenderId: "264801931428",
  appId: "1:264801931428:web:4de090054a668269285631",
};

// Initiliaze Firebase

const app = initializeApp(firebaseConfig);

// Export firesotre database
// It will be imported into your react app whenever it is needed

export const db = getFirestore(app);
