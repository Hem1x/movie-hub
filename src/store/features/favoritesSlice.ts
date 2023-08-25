import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMixedMovie } from '../../types/mixedMovieTypes';
import { IMovie } from '../../types/movie';

const initialState: IMixedMovie[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<IMixedMovie>) {
      if (state.map((movie) => movie.filmId).includes(action.payload.filmId)) {
        return;
      }
      state.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      return state.filter((movie) => movie.filmId !== action.payload);
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
