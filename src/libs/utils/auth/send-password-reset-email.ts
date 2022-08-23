import { getAuth, sendPasswordResetEmail as sendEmail } from 'firebase/auth';

export async function sendPasswordResetEmail(email: string) {
  const auth = getAuth();

  await sendEmail(auth, email);
}
