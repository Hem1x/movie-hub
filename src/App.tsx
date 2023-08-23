import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import { Routes, Route } from 'react-router-dom';

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
            <Route path="/movie/:id" element={<SingleMovie />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
