import { useAppDispatch } from '@ducks/hooks';
import { useFirebaseUser } from '@hooks/firebase-user';
import { useRouter } from 'next/router';
import { stringifyUrl } from 'query-string';
import { ReactNode, useEffect } from 'react';

const pathSignIn = '/sign-in';

interface ClientSideAuthGuardProps {
  children: ReactNode;
}

export function ClientSideAuthGuard({ children }: ClientSideAuthGuardProps) {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { asPath: pathCurrent } = router;

  const {
    user: firebaseUser,
    isLoading: isFirebaseLoading,
    error: firebaseError,
  } = useFirebaseUser();

  // Followings only care fully loaded situation
  const isUnauthenticated = !firebaseUser && firebaseError;

  useEffect(() => {
    if (isUnauthenticated && pathCurrent !== pathSignIn) {
      const url = stringifyUrl({
        url: pathSignIn,
        query: {
          redirectTo: encodeURIComponent(pathCurrent),
        },
      });

      router.push(url);
    }
  }, [isUnauthenticated, router, pathCurrent, dispatch, isFirebaseLoading]);

  return <>{children}</>;
}
