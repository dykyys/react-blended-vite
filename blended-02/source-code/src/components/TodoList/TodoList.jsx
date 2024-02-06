import { Grid, TodoListItem } from 'components';

export const TodoList = ({ todos, deleteTodo, editTodo, isEditing }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <TodoListItem
            {...todo}
            isEditing={isEditing}
            counter={index + 1}
            deleteTodo={deleteTodo}
            editTodo={() => editTodo(todo)}
          />
        </li>
      ))}
    </Grid>
  );
};
