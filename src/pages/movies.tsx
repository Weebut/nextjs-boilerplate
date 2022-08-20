import { MoviesContainer } from '@containers/movies';
import Head from 'next/head';

export default function MoviesScrollPage() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MoviesContainer />
    </div>
  );
}
