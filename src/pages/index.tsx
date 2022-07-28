import { HomeContainer } from '@containers/home';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Hello Auth0</title>
      </Head>
      <HomeContainer />
    </div>
  );
}
