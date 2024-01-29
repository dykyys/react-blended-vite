import { useSelector } from 'react-redux';
import { selectCurrentTodo, selectTodos } from 'reduxTodo/selectors';
import {
  Section,
  Container,
  Header,
  Form,
  TodoList,
  Text,
  Filter,
  EditForm,
} from 'components';

export const App = () => {
  const todos = useSelector(selectTodos);
  const isEdit = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}

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
