import React from 'react';
import styles from './MovieBlock.module.scss';
import General from './General/General';
import { useParams } from 'react-router-dom';
import { useGetMovieMoneyByIdQuery } from '../../store/moviesApi/moviesApi';
import { numberWithSpaces } from '../../utils';

const MovieBlock: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetMovieMoneyByIdQuery(id!); // [] [world] [budget] [world, budget]
  const filteredMoney = data?.filter(
    (obj) => obj.type === 'BUDGET' || obj.type === 'WORLD',
  );
  const MoneyDataNames = filteredMoney?.map((obj) => obj.type);
  const hasBuget = MoneyDataNames?.includes('BUDGET');
  const hasWorld = MoneyDataNames?.includes('WORLD');

  const budget = hasBuget
    ? filteredMoney?.filter((obj) => obj.type === 'BUDGET')[0].amount! +
      ' ' +
      filteredMoney?.filter((obj) => obj.type === 'BUDGET')[0].symbol!
    : 'Нет данных';

  const world = hasWorld
    ? filteredMoney?.filter((obj) => obj.type === 'WORLD')[0].amount! +
      ' ' +
      filteredMoney?.filter((obj) => obj.type === 'WORLD')[0].symbol!
    : 'Нет данных';

  return (
    <div className={styles.movieBlock}>
      <General />

      <div className={styles.info}>
        <h1>Информация</h1>
        <div className={styles.money}>
          <div className={styles.budget}>
            <span>Бюджет</span>
            <span>{numberWithSpaces(budget)}</span>
          </div>
          <div className={styles.collected}>
            <span>Собрано</span>
            <span>{numberWithSpaces(world)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieBlock;
