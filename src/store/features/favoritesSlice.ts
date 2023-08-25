import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../types/movie';

const initialState: IMovie[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<IMovie>) {
      if (state.map((movie) => movie.filmId).includes(action.payload.filmId)) {
        return;
      }
      state.push(action.payload);
    },
    deleteFromFavorites(state, action: PayloadAction<number>) {
      return state.filter((movie) => movie.filmId !== action.payload);
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
