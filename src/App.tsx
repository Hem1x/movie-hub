import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import PopularPage from './pages/PopularPage/PopularPage';
import AwaitPage from './pages/AwaitPage';
import TopPage from './pages/TopPage';

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
            <Route path="/movies/popular-list" element={<PopularPage />} />
            <Route path="/movies/await-list" element={<AwaitPage />} />
            <Route path="/movies/top-list" element={<TopPage />} />
            <Route path="/movies/movie/:id" element={<SingleMovie />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
