import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/selectors';
import {
  Section,
  Container,
  Header,
  Form,
  TodoList,
  Text,
  Filter,
} from 'components';

export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
