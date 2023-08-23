import React from 'react';
import styles from './Banner.module.scss';

interface BannerProps {}

const Banner = ({}: BannerProps) => {
  return (
    <div className={styles.banner}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <div className={styles.badges}>
          <div className={styles.rating}>9.0</div>
          <div className={styles.new}>Новинка</div>
        </div>
        <h1 className={styles.title}>Зелёная Миля</h1>
        <p className={styles.text}>мелодрама, приключения, боевик</p>
        <button>Подробнее</button>
      </div>
    </div>
  );
};
export default Banner;
