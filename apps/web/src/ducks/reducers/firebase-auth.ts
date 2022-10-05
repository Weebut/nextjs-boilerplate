import { FirebaseUser } from '@custom-types/firebase-user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  user: FirebaseUser | null;
  isLoading: boolean;
}

const initialState: State = {
  user: null,
  isLoading: true,
};

const MAKE_LOADING = 'nextjs-boilerplate/firebase-auth/MAKE_LOADING';
const SET_USER = 'nextjs-boilerplate/firebase-auth/SET_USER';
const FLUSH_USER = 'nextjs-boilerplate/firebase-auth/FLUSH_USER';

const slice = createSlice({
  name: 'firebaseAuth',
  initialState,
  reducers: {
    [MAKE_LOADING]: (state) => {
      state.user = null;
      state.isLoading = true;
    },
    [SET_USER]: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload ?? null;
      state.isLoading = false;
    },
    [FLUSH_USER]: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const actions = {
  makeLoading: slice.actions[MAKE_LOADING],
  setUser: slice.actions[SET_USER],
  flushUser: slice.actions[FLUSH_USER],
};

export default slice.reducer;
