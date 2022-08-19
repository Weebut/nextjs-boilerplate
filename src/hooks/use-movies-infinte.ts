import { useSWRInfinite } from './swr-infinite';

type Batch = {
  page: number;
  movies: Movie[];
};

type Movie = {
  id: number;
  title: string;
};

function getKey(pageIndex: number, previousPageData: any) {
  if (previousPageData?.total_pages === pageIndex) return null; // 끝에 도달
  return `/api/movies?page=${pageIndex + 1}`; // SWR 키
}

function getCount(data: any): number {
  return (data.total_pages as number) || 0;
}

function parser(data: any): Batch {
  const { page, results } = data;

  const movies = results.map((movie: any) => {
    const { id, title } = movie;
    return { id, title };
  });

  return { page, movies };
}

export function useMoviesInfinite() {
  return useSWRInfinite<Batch>(getKey, getCount, parser);
}
