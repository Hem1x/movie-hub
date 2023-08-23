import React from 'react';
import Search from '../components/Search/Search';
import Banner from '../components/Banner/Banner';
import PopularList from '../components/PopularList/PopularList';
import AwaitList from '../components/AwaitList/AwaitList';
import TopList from '../components/TopList/TopList';

const Home = () => {
  return (
    <div style={{ height: '100vh', flex: 1, overflow: 'auto' }}>
      <Search />
      <Banner />
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem',
        }}>
        <PopularList />
        <AwaitList />
        <TopList />
      </div>
    </div>
  );
};

export default Home;
