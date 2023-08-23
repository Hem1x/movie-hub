import React from 'react';
import styles from './PopularList.module.scss';
import ListItem from '../ListItem/ListItem';

interface PopularListProps {}

const PopularList = ({}: PopularListProps) => {
  return (
    <div className={styles.popularList}>
      <div className={styles.title}>
        <h1>Популярное</h1>
        <h2>Показать всё</h2>
      </div>

      <ul className={styles.list}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
};
export default PopularList;
