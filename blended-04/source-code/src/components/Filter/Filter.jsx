import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { addfilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={event => dispatch(addfilter(event.target.value))}
    />
  );
};
