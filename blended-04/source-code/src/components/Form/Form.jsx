import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { addTodo } from 'reduxTodo/todoSlice';

export const Form = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const todo = {
      id: nanoid(),
      text: query,
    };

    dispatch(addTodo(todo));

    setQuery('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </form>
  );
};
