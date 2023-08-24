export interface ServerResponse<T> {
  pagesCount: number;
  films: T[];
}

export interface ServerResponseBudget<T> {
  total: number;
  items: T[];
}

export interface ServerResponseImages<T> {
  total: number;
  totalPages: number;
  items: T[];
}

export interface Image {
  imageUrl: string;
  previewUrl: string;
}

export interface IMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: any;
  isRatingUp: any;
  isAfisha: number;
}

export interface ISearchedMovie {
  kinopoiskId: number;
  imdbId: any;
  nameRu: string;
  nameEn: any;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

interface Country {
  country: string;
}

interface Genre {
  genre: string;
}
