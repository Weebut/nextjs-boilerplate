import { isProduction } from '@libs/utils/environment';
import { configureStore } from '@reduxjs/toolkit';
import firebaseAuthReducer from './reducers/firebase-auth';

const store = configureStore({
  reducer: {
    firebaseAuth: firebaseAuthReducer,
  },
  devTools: !isProduction(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
