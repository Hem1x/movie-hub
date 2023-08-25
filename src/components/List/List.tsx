import React from 'react';
import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem';
import { IMovie } from '../../types/movie';
import { Link } from 'react-router-dom';
import { ListEnum } from '../../types/list';
import { nameToList } from '../../utils/nameToList';
import Loader from '../Loader/Loader';
import { IMixedMovie } from '../../types/mixedMovieTypes';

interface ListProps {
  queryHook: any;
  title: ListEnum;
}

const List = ({ queryHook, title }: ListProps) => {
  const { data } = queryHook(null);

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <h1>{nameToList(title)}</h1>
        <Link to={`/${title}`}>
          <div className={styles.seeAll}>Показать всё</div>
        </Link>
      </div>

      <ul className={styles.moviesList}>
        {data?.map((movie: IMovie) => (
          <ListItem key={movie.filmId} movie={movie as IMixedMovie} />
        ))}
      </ul>
    </div>
  );
};
export default List;
