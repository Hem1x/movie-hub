import {
  useGetAwaitMovieListQuery,
  useGetPopularMovieListQuery,
  useGetTopMovieListQuery,
} from '../store/moviesApi/moviesApi';

type AwaitMovieListQueryResult = ReturnType<typeof useGetAwaitMovieListQuery>;
type TopMovieListQueryResult = ReturnType<typeof useGetTopMovieListQuery>;
type PopularMovieListQueryResult = ReturnType<typeof useGetPopularMovieListQuery>;

export interface BudgetQuery {
  total: number;
  items: MovieMoney[];
}

export interface MovieMoney {
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
}
