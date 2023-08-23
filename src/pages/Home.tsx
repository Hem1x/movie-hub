import React from 'react';
import Search from '../components/Search/Search';
import Banner from '../components/Banner/Banner';
import PopularList from '../components/PopularList/PopularList';
import AwaitList from '../components/AwaitList/AwaitList';
import TopList from '../components/TopList/TopList';

const Home = () => {
  return (
    <>
      <Search />
      <Banner />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem',
        }}>
        <PopularList />
        <AwaitList />
        <TopList />
      </div>
    </>
  );
};

export default Home;
