import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBA7VMIyQO856HTlkIRtWg8d1eZxiSAswA',
  authDomain: 'nwitter-reloaded-317d1.firebaseapp.com',
  projectId: 'nwitter-reloaded-317d1',
  storageBucket: 'nwitter-reloaded-317d1.appspot.com',
  messagingSenderId: '354997452431',
  appId: '1:354997452431:web:86cff1bc8387e40c423afa',
  measurementId: 'G-TBXF5HFQ8J'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
