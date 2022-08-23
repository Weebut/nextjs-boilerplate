import {
  getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';

export async function reauthenticate(email: string, password: string) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error('Unauthorized');
  }

  const credential = EmailAuthProvider.credential(email, password);

  try {
    await reauthenticateWithCredential(user, credential);
  } catch (error) {
    // TODO
  }
}
