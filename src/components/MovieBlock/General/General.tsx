import React from 'react';
import styles from './General.module.scss';

interface GeneralProps {}

const General = ({}: GeneralProps) => {
  return (
    <div className={styles.general}>
      <div className={styles.poster}>
        <img
          src="https://kinopoiskapiunofficial.tech/images/posters/kp/1115471.jpg"
          alt="poster"
        />
        <div className={styles.age}>16+</div>
      </div>

      <div className={styles.movieInfo}>
        <div className={styles.tags}>
          <div className={styles.rating}>9.0</div>
          <div className={styles.imdbRating}>IMDB 7.4</div>
          <div className={styles.new}>Новинка</div>
        </div>

        <div className={styles.textInfo}>
          <h1>Барби (2023)</h1>
          <h2>Barbie</h2>
          <p>
            Барби выгоняют из Барбиленда, потому что она не соответствует его нормам
            красоты. Тогда она начинает новую жизнь в реальном мире, где обнаруживает, что
            совершенства можно достичь только благодаря внутренней гармонии.
          </p>

          <div className={styles.genres}>
            <div className={styles.genre}>Мелодрамма</div>
            <div className={styles.genre}>Приключения</div>
            <div className={styles.genre}>Фэнтези</div>
            <div className={styles.genre}>Комедия</div>
          </div>
        </div>

        <div className={styles.options}>
          <p>США, Великобритания </p>
          <p>114 мин. / 1:54</p>
        </div>
      </div>
    </div>
  );
};
export default General;
