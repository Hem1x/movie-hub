import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';
import { colorMovieRating } from '../../utils/colorMovieRating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addToFavorites, deleteFromFavorites } from '../../store/features/favoritesSlice';
import { useAppSelector } from '../../store/hooks';
import { IMovie } from '../../types/movie';

interface ListItemProps {
  movie: IMovie;
}

const ListItem = ({ movie }: ListItemProps) => {
  const selectMovie = useAppSelector((state) =>
    state.favorites.filter((obj) => obj.filmId === movie.filmId),
  );

  let isFavorite = false;

  if (selectMovie.length !== 0) {
    isFavorite = selectMovie[0].isFavorite!;
  }

  const dispatch = useDispatch();

  const clickHandler = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorites(movie.filmId));
    } else {
      dispatch(addToFavorites({ ...movie, isFavorite: true }));
    }
  };

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
        <button className={styles.favoriteBtn} onClick={clickHandler}>
          {isFavorite ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </button>

        <h1>{movie.nameRu}</h1>
        <Link to={`/movie/${movie.filmId}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
