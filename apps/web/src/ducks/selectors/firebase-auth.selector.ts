import { RootState } from '@ducks/store';

export const selectFirebaseUser = (state: RootState) => state.firebaseAuth.user;
export const selectIsFirebaseUserPending = (state: RootState) =>
  state.firebaseAuth.isLoading;
