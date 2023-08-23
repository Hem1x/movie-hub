import React from 'react';
import styles from './TopList.module.scss';
import ListItem from '../ListItem/ListItem';

interface TopListProps {}

const TopList = ({}: TopListProps) => {
  return (
    <div className={styles.topList}>
      <div className={styles.title}>
        <h1>Топ 250 фильмов</h1>
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
export default TopList;
