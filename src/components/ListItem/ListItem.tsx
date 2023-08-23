import React from 'react';
import styles from './ListItem.module.scss';
import { IMovie } from '../../@types/movie';

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
        <div className={styles.rating}>{movie.rating}</div>
      </div>
      <div className={styles.overlay}>
        <h1>{movie.nameRu}</h1>
        <button>Подробнее</button>
      </div>
    </li>
  );
};

export default ListItem;
