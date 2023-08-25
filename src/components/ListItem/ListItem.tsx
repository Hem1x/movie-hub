import React from 'react';
import styles from './ListItem.module.scss';
import { IMovie } from '../../types/movie';
import { Link } from 'react-router-dom';
import { colorMovieRating } from '../../utils/colorMovieRating';

interface ListItemProps {
  movie: IMovie;
}

const ListItem = ({ movie }: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.visible}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url('${movie.posterUrlPreview}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className={styles.rating}
          style={{ backgroundColor: colorMovieRating(movie.rating) }}>
          {movie.rating ?? 'Нет оценки'}
        </div>
      </div>
      <div className={styles.overlay}>
        <h1>{movie.nameRu}</h1>
        <Link to={`/movie/${movie.filmId}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
