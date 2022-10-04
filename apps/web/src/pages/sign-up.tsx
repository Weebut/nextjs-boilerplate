import SignUp from '@components/pages/sign-up';
import { Box } from '@mui/material';
import Head from 'next/head';

export default function SignUpPage() {
  return (
    <Box>
      <Head>
        <title>회원가입 | iN!T</title>
      </Head>
      <SignUp />
    </Box>
  );
}
