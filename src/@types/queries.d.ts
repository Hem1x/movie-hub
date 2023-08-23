import {
  useGetAwaitMovieListQuery,
  useGetPopularMovieListQuery,
  useGetTopMovieListQuery,
} from '../store/moviesApi/moviesApi';

type AwaitMovieListQueryResult = ReturnType<typeof useGetAwaitMovieListQuery>;
type TopMovieListQueryResult = ReturnType<typeof useGetTopMovieListQuery>;
type PopularMovieListQueryResult = ReturnType<typeof useGetPopularMovieListQuery>;
