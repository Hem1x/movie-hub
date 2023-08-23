import React from 'react';
import styles from './PopularList.module.scss';
import PopularListItem from './PopularListItem/PopularListItem';

interface PopularListProps {}

const PopularList = ({}: PopularListProps) => {
  return (
    <div className={styles.popularList}>
      <h1>Популярное</h1>
      <ul>
        <PopularListItem />
      </ul>
    </div>
  );
};
export default PopularList;
