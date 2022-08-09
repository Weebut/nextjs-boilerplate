import { HomeContainer } from '@containers/home';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
      <HomeContainer />
    </div>
  );
}
