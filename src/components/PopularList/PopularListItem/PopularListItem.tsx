import React from 'react';
import styles from './PopularListItem.module.scss';

const PopularListItem = () => {
  return (
    <li className={styles.popularListItem}>
      <div className={styles.visible}>
        <div
          className={styles.image}
          style={{
            backgroundImage:
              "url('https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/360')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className={styles.rating}>9.0</div>
      </div>
      <div className={styles.overlay}>
        <button>Подробнее</button>
      </div>
    </li>
  );
};

export default PopularListItem;
