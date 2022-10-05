import { FirebaseUser } from '@custom-types/firebase-user';
import { firebaseAuthClient } from '@libs/firebase/client';
import { actions } from '@ducks/reducers/firebase-auth';
import { ReactNode, useEffect } from 'react';
import { useAppDispatch } from '@ducks/hooks';

interface FirebaseAuthProviderProps {
  children: ReactNode;
}

export function FirebaseAuthProvider({
  children,
}: FirebaseAuthProviderProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    firebaseAuthClient.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdToken();

        if (!idToken) {
          return;
        }

        await fetch('/api/auth/sign-in', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ idToken }),
        });

        const payload: FirebaseUser = {
          id: user.uid,
          email: user.email ?? '',
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
        };

        dispatch(actions.setUser(payload));
      } else {
        await fetch('/api/auth/sign-out', { method: 'POST' });

        dispatch(actions.flushUser());
      }
    });
  }, [dispatch]);

  return <>{children}</>;
}
