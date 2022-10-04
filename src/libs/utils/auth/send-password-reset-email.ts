import { firebaseAuthClient } from '@libs/firebase/client';
import { sendPasswordResetEmail as sendEmail } from 'firebase/auth';

export async function sendPasswordResetEmail(email: string) {
  await sendEmail(firebaseAuthClient, email);
}
