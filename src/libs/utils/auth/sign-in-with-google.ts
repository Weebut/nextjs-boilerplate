import { firebaseAuth } from '@libs/firebase/client';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(firebaseAuth, provider);
}
