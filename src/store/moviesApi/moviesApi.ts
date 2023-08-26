import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IMovie,
  ISearchedMovie,
  ServerResponse,
  ServerResponseBudget,
} from '../../types/movie';
import { IMovieFull } from '../../types/movieFull';
import { IGenre, MovieMoney } from '../../types/queries';
import { IState } from '../features/types';

const API_KEY = '0774af9c-1989-4870-85c9-0286bd8e4c05';

const generateMovieQuery = (type: string, page = '1') => ({
  url: '/top',
  headers: {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json',
  },
  params: {
    type,
    page,
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
    getPopularMovie: builder.query<IMovie, null>({
      query: () => ({
        url: `/top`,
        params: {
          type: 'TOP_100_POPULAR_FILMS',
          page: 1,
        },
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ServerResponse<IMovie>) => response.films[3],
    }),
    getPopularMovies: builder.query<{ pagesCount: number; films: IMovie[] }, string>({
      query: (page) => generateMovieQuery('TOP_100_POPULAR_FILMS', page),
    }),
    getAwaitMovies: builder.query<{ pagesCount: number; films: IMovie[] }, string>({
      query: (page) => generateMovieQuery('TOP_AWAIT_FILMS', page),
    }),
    getTopMovies: builder.query<{ pagesCount: number; films: IMovie[] }, string>({
      query: (page) => generateMovieQuery('TOP_250_BEST_FILMS', page),
    }),
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
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      }),
    }),

    getMovieMoneyById: builder.query<MovieMoney[], string>({
      query: (id: string) => ({
        url: `/${id}/box_office`,
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: ServerResponseBudget<MovieMoney>) => response.items,
    }),
    getSearchedMovies: builder.query<
      { totalPages: number; items: ISearchedMovie[]; total: number },
      IState
    >({
      query: (state: IState) => ({
        url: '',
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
        params: {
          genres: state.genresId,
          order: state.order,
          type: state.movieType,
          keyword: state.search,
          page: state.page,
        },
      }),
    }),
    getGenres: builder.query<{ genres: IGenre[]; countries: any[] }, null>({
      query: () => ({
        url: '/filters',
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useGetPopularMoviesQuery,
  useGetPopularMovieListQuery,
  useGetAwaitMovieListQuery,
  useGetTopMovieListQuery,
  useGetMovieByIdQuery,
  useGetMovieMoneyByIdQuery,
  useGetAwaitMoviesQuery,
  useGetTopMoviesQuery,
  useGetSearchedMoviesQuery,
  useGetGenresQuery,
} = moviesApi;
