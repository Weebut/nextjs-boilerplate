import { Layout } from '@components/layouts/layout.component';
import {
  FullWidthStrip,
  FullWidthStripBackgroundColorEnums,
} from '@components/strips/full-width-strip.component';
import { Strip } from '@components/strips/strip.component';
import { useMoviesInfinite } from '@hooks/use-movies-infinte';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export function HomeContainer() {
  const { data: session } = useSession();

  const moviesResult = useMoviesInfinite();

  useEffect(() => {
    if (moviesResult.error) {
      alert('API 호출에 실패했습니다!');
    }
  }, [moviesResult.error]);

  return (
    <Layout session={session}>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.PRIMARY}>
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text text-center">
            <span className="text-xl text-white">Title</span>
            <br />
            <span className="text-white">Sub Title</span>
          </p>
        </div>
      </FullWidthStrip>
      <Strip>
        <div className="py-32">
          <span className="text-2xl font-bold">Movies Now Playing</span>
          {/* Infinite scroll */}
          <div className="space-y-4 py-12">
            {moviesResult?.batchs?.map((batch, idx) => {
              const { page, movies } = batch;
              return (
                <div key={idx}>
                  {movies.map((movie, idx) => {
                    const { id, title } = movie;

                    return (
                      <div key={idx}>
                        {id} {title}
                      </div>
                    );
                  })}
                  {page}/{moviesResult?.count}
                </div>
              );
            })}
            <button
              onClick={moviesResult.goNext}
              className="rounded bg-primary p-4 text-white"
            >
              LOAD MORE
            </button>
          </div>
        </div>
      </Strip>

      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.BLACK}>
        <div className="flex items-center justify-center py-32">
          <span className="text-2xl font-bold text-white">
            Sign up and get your favorite movies!
          </span>
        </div>
      </FullWidthStrip>
    </Layout>
  );
}
