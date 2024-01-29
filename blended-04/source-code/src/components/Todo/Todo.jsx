import { useDispatch } from 'react-redux';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import { addCurrentTodo, deleteTodo } from 'reduxTodo/todoSlice';
import { Text } from 'components';

import style from './Todo.module.css';

export const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{counter}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(addCurrentTodo({ id, text }))}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
