import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ListMoviePage from './pages/ListMoviePage/ListMoviePage';
import {
  useGetAwaitMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopMoviesQuery,
} from './store/moviesApi/moviesApi';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}>
        <SideBar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/popular-list"
              element={<ListMoviePage queryHook={useGetPopularMoviesQuery} />}
            />
            <Route
              path="/await-list"
              element={<ListMoviePage queryHook={useGetAwaitMoviesQuery} />}
            />
            <Route
              path="/top-list"
              element={<ListMoviePage queryHook={useGetTopMoviesQuery} />}
            />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
