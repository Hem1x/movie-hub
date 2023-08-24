import React from 'react';
import styles from './SearchedMovie.module.scss';
import { ISearchedMovie } from '../../types/movie';
import { Link } from 'react-router-dom';
import { colorMovieRating } from '../../utils/colorMovieRating';

interface SearchedMovieProps {
  movie: ISearchedMovie;
}

const SearchedMovie = ({ movie }: SearchedMovieProps) => {
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
          style={{ backgroundColor: colorMovieRating(movie.ratingKinopoisk.toString()) }}>
          {movie.ratingKinopoisk ?? 'Нет оценки'}
        </div>
      </div>
      <div className={styles.overlay}>
        <h1>{movie.nameRu}</h1>
        <Link to={`/movies/movie/${movie.kinopoiskId}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </li>
  );
};

export default SearchedMovie;
