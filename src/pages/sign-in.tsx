import { SignInContainer } from '@containers/sign-in';
import { withSessionSsr } from '@libs/iron-session/iron-session';
import Head from 'next/head';

export default function SignInPage() {
  return (
    <div>
      <Head>
        <title>로그인 | iN!T</title>
      </Head>
      <SignInContainer />
    </div>
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
