import { createSlice } from '@reduxjs/toolkit';

interface IState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IState = {
  email: null,
  token: null,
  id: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export default usersSlice.reducer;
export const { setUser, removeUser } = usersSlice.actions;
