import { MyPageContainer } from '@containers/my-page';
import { withSessionSsr } from '@libs/iron-session/iron-session';
import Head from 'next/head';

export default function MyPage() {
  return (
    <div>
      <Head>
        <title>마이 페이지</title>
      </Head>
      <MyPageContainer />
    </div>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const idToken = req.session.idToken;

    if (!idToken) {
      return {
        redirect: {
          destination: '/sign-in',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  },
);
