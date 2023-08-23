import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie, ServerResponse, ServerResponseBudget } from '../../@types/movie';
import { IMovieFull } from '../../@types/movieFull';
import { BudgetQuery, MovieMoney } from '../../@types/queries';

const generateMovieQuery = (type: string) => ({
  url: '/top',
  headers: {
    'X-API-KEY': '46e04e96-b48f-46b0-8f09-177b11d32fa1',
    'Content-Type': 'application/json',
  },
  params: {
    type,
    page: 1,
  },
});

const providesTags = (result: IMovie[] | undefined) =>
  result
    ? [
        ...result.map(({ filmId }) => ({ type: 'Movies' as const, filmId })),
        { type: 'Movies' as const, id: 'LIST' },
      ]
    : [{ type: 'Movies' as const, id: 'LIST' }];

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  tagTypes: ['Movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
  }),
  endpoints: (builder) => ({
    getPopularMovieList: builder.query<IMovie[], null>({
      query: () => generateMovieQuery('TOP_100_POPULAR_FILMS'),
      transformResponse: (response: ServerResponse<IMovie>) => response.films.slice(0, 5),
      providesTags: (result) => providesTags(result),
    }),
    getTopMovieList: builder.query<IMovie[], null>({
      query: () => generateMovieQuery('TOP_250_BEST_FILMS'),
      transformResponse: (response: ServerResponse<IMovie>) => response.films.slice(0, 5),
      providesTags: (result) => providesTags(result),
    }),
    getAwaitMovieList: builder.query<IMovie[], null>({
      query: () => generateMovieQuery('TOP_AWAIT_FILMS'),
      transformResponse: (response: ServerResponse<IMovie>) => response.films.slice(0, 5),
      providesTags: (result) => providesTags(result),
    }),
    getMovieById: builder.query<IMovieFull, string>({
      query: (id: string) => ({
        url: `/${id}`,
        headers: {
          'X-API-KEY': '46e04e96-b48f-46b0-8f09-177b11d32fa1',
          'Content-Type': 'application/json',
        },
      }),
    }),
    getMovieMoneyById: builder.query<MovieMoney[], string>({
      query: (id: string) => ({
        url: `/${id}/box_office`,
        headers: {
          'X-API-KEY': '46e04e96-b48f-46b0-8f09-177b11d32fa1',
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ServerResponseBudget<MovieMoney>) => response.items,
    }),
  }),
});

export const {
  useGetPopularMovieListQuery,
  useGetAwaitMovieListQuery,
  useGetTopMovieListQuery,
  useGetMovieByIdQuery,
  useGetMovieMoneyByIdQuery,
} = moviesApi;
