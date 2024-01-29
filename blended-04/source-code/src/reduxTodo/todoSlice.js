import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload];
    },

    deleteTodo: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },

    updateTodo: (state, { payload }) =>
      state.map(item => {
        return item.id === payload.id ? payload : item;
      }),
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
