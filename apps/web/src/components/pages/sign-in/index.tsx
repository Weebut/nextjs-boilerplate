import SignInForm from '@components/blocks/forms/sign-in';
import Strip from '@components/blocks/strips/default';
import MainTemplate from '@components/blocks/templates/default';
import { useFirebaseUser } from '@hooks/firebase-user';
import { firebaseAuthClient } from '@libs/firebase/client';
import { signInWithGoogle } from '@libs/utils/auth/sign-in-with-google';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { getRedirectResult, OperationType } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Link } from 'shared-components';

const pathHome = '/';

interface SignInProps {
  redirectTo?: string;
}

export default function SignIn({ redirectTo }: SignInProps) {
  const router = useRouter();

  const { isLoading } = useFirebaseUser();
  const [checkingRedirect, setCheckingRedirect] = useState(true);

  useEffect(() => {
    getRedirectResult(firebaseAuthClient)
      .then((result) => {
        if (result?.user && result.operationType === OperationType.SIGN_IN) {
          router.push(redirectTo || pathHome);
        }
      })
      .finally(() => {
        setCheckingRedirect(false);
      });
  }, [redirectTo, router]);

  if (isLoading || checkingRedirect) {
    return (
      <MainTemplate>
        <Box
          height="calc(100vh - 200px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <Strip>
        <Stack spacing={4} display="flex" flexDirection="column" width="100%">
          <Box display="flex" justifyContent="center" py={12}>
            <Typography variant="h4" fontWeight="bold">
              로그인
            </Typography>
          </Box>

          {/* Sign in with Email account */}
          <SignInForm />

          {/* Sign in with Google */}
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>

          <Box display="flex" width="100%" alignItems="center">
            <Link href="/reset-password"> 비밀번호가 기억나지 않나요?</Link>
            <Box flexGrow={1} />
            <Link href="/sign-up">계정이 없으신가요?</Link>
          </Box>
        </Stack>
      </Strip>
    </MainTemplate>
  );
}
