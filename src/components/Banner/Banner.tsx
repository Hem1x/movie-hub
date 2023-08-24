import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { useGetPopularMovieQuery } from '../../store/moviesApi/moviesApi';
import { CircularProgress } from '@mui/material';
import Loader from '../Loader/Loader';

interface BannerProps {}

const Banner = ({}: BannerProps) => {
  const { data: movie, isLoading } = useGetPopularMovieQuery(null);

  const genres = movie?.genres.map((obj) => obj.genre);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.banner}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url('${movie?.posterUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}></div>
      <div className={styles.info}>
        <div className={styles.badges}>
          <div className={styles.rating}>{movie?.rating}</div>
          <div className={styles.new}>Новинка</div>
        </div>
        <h1 className={styles.title}>{movie?.nameRu}</h1>
        <p className={styles.text}>{genres?.join(', ')}</p>
        <Link to={`${movie?.filmId}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
