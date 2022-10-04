import SignIn from '@components/pages/sign-in';
import { Box } from '@mui/material';
import Head from 'next/head';

export default function SignInPage() {
  return (
    <Box>
      <Head>
        <title>로그인 | iN!T</title>
      </Head>
      <SignIn />
    </Box>
  );
}
