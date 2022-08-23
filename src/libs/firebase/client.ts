// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { production } from '@libs/constants/node';

const firebaseConfig =
  process.env.NODE_ENV === production
    ? {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      }
    : {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

if (process.env.NODE_ENV === production) {
  // const firebaseAnalytics = getAnalytics(firebaseApp);
} else {
  connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
}
