import React from 'react';
import styles from './General.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../../store/moviesApi/moviesApi';
import { minToHours } from '../../../utils/minToHours';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { colorMovieRating } from '../../../utils/colorMovieRating';

interface GeneralProps {}

const General = ({}: GeneralProps) => {
  const { id } = useParams();
  const { data } = useGetMovieByIdQuery(id!);
  const navigate = useNavigate();

  return (
    <div className={styles.general}>
      <div className={styles.poster}>
        <img src={`${data?.posterUrl}`} alt="poster" />
        <div className={styles.age}>
          {data?.ratingAgeLimits
            ? data?.ratingAgeLimits.slice(3) + '+'
            : data?.ratingMpaa
            ? data.ratingMpaa.toUpperCase()
            : 'нет данных'}
        </div>
      </div>

      <div className={styles.movieInfo}>
        <div className={styles.tags}>
          {data?.ratingKinopoisk && (
            <div
              className={styles.rating}
              style={{
                backgroundColor: colorMovieRating(data?.ratingKinopoisk.toString()),
              }}>
              {data.ratingKinopoisk}
            </div>
          )}
          {data?.ratingKinopoisk && (
            <div className={styles.imdbRating}>IMDB {data.ratingImdb}</div>
          )}
          {data?.year === 2023 && <div className={styles.new}>Новинка</div>}
        </div>

        <div className={styles.textInfo}>
          <h1>
            {data?.nameRu} ({data?.year})
          </h1>
          <h2>{data?.nameOriginal}</h2>
          <p>{data?.description}</p>

          <div className={styles.genres}>
            {data?.genres.map((obj) => (
              <div key={obj.genre} className={styles.genre}>
                {obj.genre}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.options}>
          <p>{data?.countries.map((obj) => obj.country).join(', ')}</p>
          <p>
            {data?.filmLength} мин. / {minToHours(data?.filmLength!)}
          </p>
        </div>
      </div>

      <div onClick={() => navigate(-1)}>
        <button className={styles.back}>Назад</button>
      </div>
    </div>
  );
};
export default General;
