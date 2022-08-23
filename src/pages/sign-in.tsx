import { SignInContainer } from '@containers/sign-in';
import { withSessionSsr } from '@libs/iron-session/iron-session';
import { Box } from '@mui/material';
import Head from 'next/head';

export default function SignInPage() {
  return (
    <Box>
      <Head>
        <title>로그인 | iN!T</title>
      </Head>
      <SignInContainer />
    </Box>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const idToken = req.session.idToken;

    if (idToken) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  },
);
