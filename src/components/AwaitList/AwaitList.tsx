import React from 'react';
import styles from './AwaitList.module.scss';
import ListItem from '../ListItem/ListItem';

interface AwaitListProps {}

const AwaitList = ({}: AwaitListProps) => {
  return (
    <div className={styles.awaitList}>
      <div className={styles.title}>
        <h1>Скоро выйдут</h1>
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
export default AwaitList;
