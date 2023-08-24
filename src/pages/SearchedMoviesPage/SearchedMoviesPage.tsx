import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useGetSearchedMoviesQuery } from '../../store/moviesApi/moviesApi';
import styles from './SearchedMoviesPage.module.scss';
import SearchedMovie from '../../components/SearchedMovie/SearchedMovie';
import Loader from '../../components/Loader/Loader';
import { Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';
import { onChangePage } from '../../store/features/filterSlice';

const SearchedMoviesPage = () => {
  const { search, genresId, movieType, order } = useAppSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    dispatch(onChangePage(value));
  };

  const { data, isLoading } = useGetSearchedMoviesQuery({
    search,
    genresId,
    movieType,
    order,
    page: currentPage,
  });
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={styles.pagination}>
        {data?.totalPages !== 1 && (
          <Pagination
            count={data?.totalPages}
            color="primary"
            onChange={handleOnChange}
          />
        )}
      </div>

      <div className={styles.movies}>
        {data?.items.map((movie) => (
          <SearchedMovie key={movie.kinopoiskId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchedMoviesPage;
