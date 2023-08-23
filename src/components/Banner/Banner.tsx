import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import {
  useGetMovieByIdQuery,
  useGetMovieImagesByIdQuery,
  useGetPopularMovieListQuery,
} from '../../store/moviesApi/moviesApi';

interface BannerProps {}

const Banner = ({}: BannerProps) => {
  const { data } = useGetPopularMovieListQuery(null);
  const { data: movie } = useGetMovieByIdQuery(data![0]?.filmId.toString() || '4889667');
  const genres = movie?.genres.map((obj) => obj.genre);

  const { data: image } = useGetMovieImagesByIdQuery(
    data![0]?.filmId.toString() || '4889667',
  );
  const imageURL =
    image![0].imageUrl ||
    'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/15f315df-3145-4310-9e4d-b2367b16d889/orig';

  return (
    <div className={styles.banner}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url('${imageURL}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}></div>
      <div className={styles.info}>
        <div className={styles.badges}>
          <div className={styles.rating}>{movie?.ratingKinopoisk}</div>
          <div className={styles.new}>Новинка</div>
        </div>
        <h1 className={styles.title}>{movie?.nameRu}</h1>
        <p className={styles.text}>{genres?.join(', ')}</p>
        <Link to={`${movie?.kinopoiskId}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
