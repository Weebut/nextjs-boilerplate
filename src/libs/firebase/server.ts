import { production } from '@libs/constants/node';
import { config } from 'dotenv';
import { applicationDefault, getApp, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

config();

export function getFirebaseApp() {
  try {
    const found = getApp();
    return found;
  } catch (err) {
    if (process.env.NODE_ENV === production) {
      return initializeApp({
        credential: applicationDefault(),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
    } else {
      return initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID });
    }
  }
}

const app = getFirebaseApp();

export const firebaseAuth = getAuth(app);
