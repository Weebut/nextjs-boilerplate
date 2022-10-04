// Import the functions you need from the SDKs you need
import { isProduction } from '@libs/utils/environment';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

const firebaseConfig = isProduction()
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
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'nextjs-boilerplate-firebase');

export const firebaseAuthClient = getAuth(app);
firebaseAuthClient.languageCode = 'kr';

if (isProduction()) {
  // const firebaseAnalytics = getAnalytics(firebaseApp);
} else {
  connectAuthEmulator(firebaseAuthClient, 'http://localhost:9099');
}
