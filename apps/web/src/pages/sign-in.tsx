import SignIn from '@components/pages/sign-in';
import { Box } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface SignInPageProps {
  redirectTo?: string;
}

export default function SignInPage({ redirectTo }: SignInPageProps) {
  return (
    <Box>
      <Head>
        <title>로그인 | iN!T</title>
      </Head>
      <SignIn redirectTo={redirectTo} />
    </Box>
  );
}

export function getServerSideProps({ query }: GetServerSidePropsContext) {
  return {
    props: {
      redirectTo: query.redirectTo
        ? decodeURIComponent(query.redirectTo as string)
        : null,
    },
  };
}
