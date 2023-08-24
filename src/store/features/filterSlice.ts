import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IState, movieTypeEnum, orderEnum } from './types';

const initialState: IState = {
  search: '',
  movieType: movieTypeEnum.FILM,
  order: orderEnum.RATING,
  genresId: 1,
  page: 1,
};

export const filterSlice = createSlice({
  name: '@filter',
  initialState,
  reducers: {
    onChangeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    onChangeMovieType(state, action: PayloadAction<movieTypeEnum>) {
      state.movieType = action.payload;
    },
    onChangeOrder(state, action: PayloadAction<orderEnum>) {
      state.order = action.payload;
    },
    onChangeGenresId(state, action: PayloadAction<number>) {
      state.genresId = action.payload;
    },
    onChangePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  onChangeGenresId,
  onChangeMovieType,
  onChangeOrder,
  onChangeSearch,
  onChangePage,
} = filterSlice.actions;
