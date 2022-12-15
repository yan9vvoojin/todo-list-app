import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItemList = ({ todoItemList, onTodoItemClick, onRemoveClick }) => {
  const todoList = todoItemList.map((todoItem) => (
    <TodoItem
      key={todoItem.id}
      todoItem={todoItem}
      onTodoItemClick={onTodoItemClick}
      onRemoveClick={onRemoveClick}
    />
  ));

  return (
    <List>
      {todoList}
    </List>
  );
};

export default TodoItemList;
