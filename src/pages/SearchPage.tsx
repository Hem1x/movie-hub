import React from 'react';
import Search from '../components/Search/Search';
import SearchedMovies from './SearchedMoviesPage/SearchedMoviesPage';

const SearchPage = () => {
  return (
    <div>
      <Search />
      <SearchedMovies />
    </div>
  );
};

export default SearchPage;
