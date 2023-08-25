import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetSearchedMoviesQuery } from '../../store/moviesApi/moviesApi';
import styles from './SearchedMoviesPage.module.scss';
import SearchedMovie from '../../components/SearchedMovie/SearchedMovie';
import Loader from '../../components/Loader/Loader';
import { Pagination } from '@mui/material';
import { onChangePage } from '../../store/features/filterSlice';
import SelectorByOrder from '../../components/SelectByOrder/SelectorByOrder';
import SelectByMovieType from '../../components/SelectByMovieType/SelectByMovieType';
import SelectByGenre from '../../components/SelectByGenre/SelectByGenre';

const SearchedMoviesPage = () => {
  const { search, genresId, movieType, order } = useAppSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data?.total !== 0 ? (
        <div>
          <div className={styles.filters}>
            {data?.totalPages !== 1 && (
              <Pagination
                count={data?.totalPages}
                color="primary"
                onChange={handleOnChange}
              />
            )}
            <SelectorByOrder />
            <SelectByMovieType />
            <SelectByGenre />
          </div>

          <div className={styles.movies}>
            {data?.items.map((movie) => (
              <SearchedMovie key={movie.kinopoiskId} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: 'center', marginTop: '5rem' }}>Ничего не нашли</h2>
      )}
    </>
  );
};

export default SearchedMoviesPage;
