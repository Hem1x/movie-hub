export interface IMovieFull {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: any;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: any;
  ratingAwaitCount: number;
  ratingRfCritics: any;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: any;
  isTicketsAvailable: boolean;
  productionStatus: any;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: Country[];
  genres: Genre[];
  startYear: any;
  endYear: any;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
