import MyPage from '@components/pages/my-page';
import { ClientSideAuthGuard } from '@libs/guards/client.guard';
import { ServerSideAuthGuard } from '@libs/guards/server.guard';
import { withSessionSsr } from '@libs/iron-session/iron-session';
import { Box } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

export default function MyPagePage() {
  return (
    <ClientSideAuthGuard>
      <Box>
        <Head>
          <title>마이 페이지</title>
        </Head>
        <MyPage />
      </Box>
    </ClientSideAuthGuard>
  );
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps(context: GetServerSidePropsContext) {
    const { props, redirect } = ServerSideAuthGuard(context);

    if (redirect) {
      return {
        redirect,
      };
    }

    return { props };
  },
);
