export enum movieTypeEnum {
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  TV_SERIES = 'TV_SERIES',
  MINI_SERIES = 'MINI_SERIES',
  ALL = 'ALL',
}

export enum orderEnum {
  RATING = 'RATING',
  NUM_VOTE = 'NUM_VOTE',
  YEAR = 'YEAR',
}
export interface IState {
  search: string;
  movieType: movieTypeEnum | null;
  order: orderEnum | null;
  genresId: number | null;
  page: number | null;
}
