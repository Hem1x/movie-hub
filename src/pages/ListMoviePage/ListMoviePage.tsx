import React, { useState } from 'react';
import { useGetPopularMoviesQuery } from '../../store/moviesApi/moviesApi';
import ListItem from '../../components/ListItem/ListItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { nameToList } from '../../utils/nameToList';
import { ListEnum } from '../../types/list';
import styles from './ListMoviePage.module.scss';
import { Pagination } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IMovie } from '../../types/movie';
import Loader from '../../components/Loader/Loader';

interface ListMoviePageProps {
  queryHook: any;
}

const ListMoviePage = ({ queryHook }: ListMoviePageProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = queryHook(currentPage.toString());
  const { pathname } = useLocation();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

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
        {data?.films.map((movie: IMovie) => (
          <ListItem key={movie.filmId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ListMoviePage;
