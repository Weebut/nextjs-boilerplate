import { NofFoundContainer } from '@containers/not-found';
import Head from 'next/head';

export default function NotFoundPage() {
  return (
    <div>
      <Head>
        <title>페이지를 찾을 수 없어요</title>
      </Head>
      <NofFoundContainer />
    </div>
  );
}
