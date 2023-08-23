import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

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
            <Route path="/movie" element={<Home />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
