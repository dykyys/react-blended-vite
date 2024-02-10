import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'reduxState/filter/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handelCahnge = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };
  return (
    <input
      type="text"
      onChange={handelCahnge}
      placeholder="What currency are you looking for?🧐"
      title="Request format USD"
      className={styles.input}
      name="currency"
    />
  );
};
