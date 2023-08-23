import React from 'react';
import styles from './MovieBlock.module.scss';
import General from './General/General';
import { useParams } from 'react-router-dom';
import {
  useGetMovieByIdQuery,
  useGetMovieMoneyByIdQuery,
} from '../../store/moviesApi/moviesApi';
import { numberWithSpaces } from '../../utils';

interface MovieBlockProps {}

const MovieBlock = ({}: MovieBlockProps) => {
  const { id } = useParams();
  const { data } = useGetMovieMoneyByIdQuery(id!); // [] [world] [budget] [world, budget]
  const filteredMoney = data?.filter(
    (obj) => obj.type === 'BUDGET' || obj.type === 'WORLD',
  );
  const MoneyDataNames = filteredMoney?.map((obj) => obj.type);
  const hasBuget = MoneyDataNames?.includes('BUDGET');
  const hasWorld = MoneyDataNames?.includes('WORLD');

  const budget = hasBuget
    ? filteredMoney?.filter((obj) => obj.type === 'BUDGET')[0].amount
    : 'Нет данных';
  const world = hasWorld
    ? filteredMoney?.filter((obj) => obj.type === 'WORLD')[0].amount
    : 'Нет данных';

  return (
    <div className={styles.movieBlock}>
      <General />

      <div className={styles.info}>
        <h1>Информация</h1>
        <div className={styles.money}>
          <div className={styles.budget}>
            <span>Бюджет</span>
            <span>
              {typeof budget === 'number' ? numberWithSpaces(budget) + ' $' : budget}
            </span>
          </div>
          <div className={styles.collected}>
            <span>Собрано</span>
            <span>
              {typeof world === 'number' ? numberWithSpaces(world) + ' $' : world}
            </span>
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
