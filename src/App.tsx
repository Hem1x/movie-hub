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
            <Route path="/movies" element={<Home />} />
            <Route
              path="/movies/popular-list"
              element={<ListMoviePage queryHook={useGetPopularMoviesQuery} />}
            />
            <Route
              path="/movies/await-list"
              element={<ListMoviePage queryHook={useGetAwaitMoviesQuery} />}
            />
            <Route
              path="/movies/top-list"
              element={<ListMoviePage queryHook={useGetTopMoviesQuery} />}
            />
            <Route path="/movies/movie/:id" element={<SingleMovie />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
