import React from 'react';
import styles from './MovieBlock.module.scss';
import General from './General/General';

interface MovieBlockProps {}

const MovieBlock = ({}: MovieBlockProps) => {
  return (
    <div className={styles.movieBlock} style={{ height: 2000 }}>
      <General />

      <div className={styles.info}>
        <h1>Информация</h1>
        <div className={styles.money}>
          <div className={styles.budget}>
            <span>Бюджет</span>
            <span>100 000 000 $</span>
          </div>
          <div className={styles.collected}>
            <span>Собрано</span>
            <span>1 000 000 000 $</span>
          </div>
        </div>
      </div>

      {/* <div className={styles.trailer}>
        <h1>Трейлер</h1>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/dylyj3xObJo"
            title="YouTube video player"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </div> */}
    </div>
  );
};
export default MovieBlock;
