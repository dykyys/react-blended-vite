import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/selectors';
import { Grid, GridItem, Todo, Text } from 'components';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);
  return (
    <>
      {!todos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo {...todo} counter={index + 1} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
