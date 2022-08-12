import { MyPageContainer } from '@containers/my-page';
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
