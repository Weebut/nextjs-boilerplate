import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '../containers/home/reducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
