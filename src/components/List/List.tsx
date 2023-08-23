import React from 'react';
import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem';
import { IMovie } from '../../@types/movie';

interface ListProps {
  queryHook: any;
  title: string;
}

const List = ({ queryHook, title }: ListProps) => {
  const { data } = queryHook(null);

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <h2>Показать всё</h2>
      </div>

      <ul className={styles.moviesList}>
        {data?.map((movie: IMovie) => (
          <ListItem movie={movie} />
        ))}
      </ul>
    </div>
  );
};
export default List;
