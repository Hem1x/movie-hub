import React from 'react';
import Search from '../components/Search/Search';
import Banner from '../components/Banner/Banner';
import PopularList from '../components/PopularList/PopularList';

const Home = () => {
  return (
    <div style={{ height: '100vh', flex: 1, overflow: 'auto' }}>
      <Search />
      <Banner />
      <PopularList />
    </div>
  );
};

export default Home;
