import { useDispatch, useSelector } from 'react-redux';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { addCurrentTodo, updateTodo } from 'reduxTodo/todoSlice';
import { selectCurrentTodo } from 'reduxTodo/selectors';

export const EditForm = () => {
  const dispatch = useDispatch();

  const currentTodo = useSelector(selectCurrentTodo);

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.text;
    dispatch(updateTodo(value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        onClick={() => dispatch(addCurrentTodo(null))}
        className={style.editButton}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
