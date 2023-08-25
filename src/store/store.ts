import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { moviesApi } from './moviesApi/moviesApi';
import filterReducer from './features/filterSlice';
import favoritesReducer from './features/favoritesSlice';
import userReducer from './features/userSlice';

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  filter: filterReducer,
  favorites: favoritesReducer,
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
