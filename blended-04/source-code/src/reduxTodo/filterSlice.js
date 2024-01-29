import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addfilter: (_, { payload }) => {
      return payload;
    },
  },
});

export const { addfilter } = filterSlice.actions;

export default filterSlice.reducer;
