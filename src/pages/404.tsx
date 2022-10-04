import NotFound from '@components/pages/not-found';
import { Box } from '@mui/material';
import Head from 'next/head';

export default function NotFoundPage() {
  return (
    <Box>
      <Head>
        <title>페이지를 찾을 수 없어요</title>
      </Head>
      <NotFound />
    </Box>
  );
}
