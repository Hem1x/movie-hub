import { IMovie } from './movie';
import { IMovieFull } from './movieFull';

export type IMixedMovie = Partial<IMovieFull> &
  IMovie & {
    year: number;
  };
