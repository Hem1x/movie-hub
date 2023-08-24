import React, { useState } from 'react';
import { useGetPopularMoviesQuery } from '../../store/moviesApi/moviesApi';
import ListItem from '../../components/ListItem/ListItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { nameToList } from '../../utils/nameToList';
import { ListEnum } from '../../types/list';
import styles from './PopularPage.module.scss';
import { Pagination } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PopularPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetPopularMoviesQuery(currentPage.toString());
  const { pathname } = useLocation();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.back}>
          <div onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </div>
          <h1>{nameToList(pathname.slice(1) as ListEnum)}</h1>
        </div>

        <Pagination
          count={data?.pagesCount}
          color="primary"
          size="large"
          onChange={handleChange}
        />
      </div>

      <div className={styles.movies}>
        {data?.films.map((movie) => (
          <ListItem key={movie.filmId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularPage;
