import { Layout } from '@components/layouts/layout.component';
import { Strip } from '@components/strips/strip.component';
import { useIntersectionObserver } from '@hooks/intersection-observer';
import { useMoviesInfinite } from '@hooks/use-movies-infinte';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export function MoviesContainer() {
  const { data: session } = useSession();

  const moviesResult = useMoviesInfinite();

  const infiniteScrollTarget = 'load-more';

  useEffect(() => {
    if (moviesResult.error) {
      alert('API 호출에 실패했습니다!');
    }
  }, [moviesResult.error]);

  useIntersectionObserver({
    isLoading: moviesResult.isLoading,
    hasNext: moviesResult.hasNext,
    goNext: moviesResult.goNext,
    target: infiniteScrollTarget,
  });

  return (
    <Layout session={session} showFooter={false}>
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
            <div
              id={infiniteScrollTarget}
              className="h-32"
              hidden={!moviesResult?.hasNext}
            />
          </div>
        </div>
      </Strip>
    </Layout>
  );
}
