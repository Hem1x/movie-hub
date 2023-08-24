import React from 'react';
import Banner from '../components/Banner/Banner';
import {
  useGetAwaitMovieListQuery,
  useGetPopularMovieListQuery,
  useGetTopMovieListQuery,
} from '../store/moviesApi/moviesApi';
import List from '../components/List/List';
import { ListEnum } from '../types/list';

const Home = () => {
  return (
    <>
      <Banner />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem',
        }}>
        <List title={ListEnum.POPULAR} queryHook={useGetPopularMovieListQuery} />
        <List title={ListEnum.TOP} queryHook={useGetTopMovieListQuery} />
        <List title={ListEnum.AWAIT} queryHook={useGetAwaitMovieListQuery} />
      </div>
    </>
  );
};

export default Home;
