import React from 'react';
import Search from '../components/Search/Search';
import Banner from '../components/Banner/Banner';
import {
  useGetAwaitMovieListQuery,
  useGetPopularMovieListQuery,
  useGetTopMovieListQuery,
} from '../store/moviesApi/moviesApi';
import List from '../components/List/List';

const Home = () => {
  return (
    <>
      <Search />
      <Banner />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem',
        }}>
        <List title="Популярное" queryHook={useGetPopularMovieListQuery} />
        <List title="Топ 250 фильмов" queryHook={useGetTopMovieListQuery} />
        <List title="Скоро выйдут" queryHook={useGetAwaitMovieListQuery} />
      </div>
    </>
  );
};

export default Home;
