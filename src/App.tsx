import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}>
        <SideBar />
        <Home />
      </div>
    </>
  );
};

export default App;
