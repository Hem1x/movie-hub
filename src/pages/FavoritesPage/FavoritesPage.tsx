import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import ListItem from '../../components/ListItem/ListItem';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favorites = useAppSelector((state) => state.favorites);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <h1>Мое избранное</h1>
      </div>

      <div className={styles.list}>
        {favorites.length !== 0 ? (
          favorites.map((movie) => <ListItem key={movie.filmId} movie={movie} />)
        ) : (
          <h2 className={styles.noMessage}>Вы ничего не выбирали</h2>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
