import { MoviesContainer } from '@containers/movies';
import Head from 'next/head';

export default function MoviesScrollPage() {
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <MoviesContainer />
    </div>
  );
}
