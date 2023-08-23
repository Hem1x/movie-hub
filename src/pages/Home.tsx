import React from 'react';
import Search from '../components/Search/Search';
import Banner from '../components/Banner/Banner';

const Home = () => {
  return (
    <div style={{ height: '100vh', flex: 1, overflow: 'auto' }}>
      <Search />
      <Banner />
    </div>
  );
};

export default Home;
