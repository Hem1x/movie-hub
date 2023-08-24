export enum movieTypeEnum {
  FILM,
  TV_SHOW,
  TV_SERIES,
  MINI_SERIES,
  ALL,
}

export enum orderEnum {
  RATING,
  NUM_VOTE,
  YEAR,
}

export interface IState {
  search: string;
  movieType: movieTypeEnum | null;
  order: orderEnum | null;
  genresId: number | null;
}
