import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = exampleSlice.actions;

export const selectExampleValue = (state: RootState) => state.example.value;

export const exampleReducer = exampleSlice.reducer;

export default exampleSlice;
