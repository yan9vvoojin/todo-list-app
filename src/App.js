import { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import Header from './Components/Header';
import UserInputField from './Components/UserInputField';
import TodoItemList from './Components/TodoItemList';
import './style.css'

const outerBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
  width: '100%'
};

const innerBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  gap: 5,
  minWidth: '50%'
};

const App = () => {
  const [todoItemList, setTodoItemList] = useState([]);

  useEffect(() => {
    fetchTodoItemList();
  }, [todoItemList]);

  const fetchTodoItemList = async () => {
    const response = await fetch('http://localhost:3000/todo-list');
    const data = await response.json();
    setTodoItemList(data);
  };

  const postNewTodoItem = (newTodoItem) => {
    fetch('http://localhost:3000/todo-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodoItem)
    });
  };

  const updateTodoItem = (updatedTodoItem) => {
    fetch(`http://localhost:3000/todo-list/${updatedTodoItem.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodoItem)
    });
  };

  const removeTodoItem = (clickedTodoItem) => {
    fetch(`http://localhost:3000/todo-list/${clickedTodoItem.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const onSubmit = (newTodoItem) => {
    setTodoItemList([...todoItemList, newTodoItem]);
    postNewTodoItem(newTodoItem);
  };

  const onTodoItemClick = (clickedTodoItem) => {
    const updatedTodoItem = {
      ...clickedTodoItem,
      isFinished: !clickedTodoItem.isFinished
    };
    setTodoItemList(todoItemList.map((todoItem) => todoItem.id === clickedTodoItem.id ? updatedTodoItem : todoItem));
    updateTodoItem(updatedTodoItem);
  };

  const onRemoveClick = (clickedTodoItem) => {
    setTodoItemList(todoItemList.filter((todoItem) => todoItem.id !== clickedTodoItem.id));
    removeTodoItem(clickedTodoItem);
  };

  return (
    <Box sx={outerBoxStyle}>
      <Header />
      <Box sx={innerBoxStyle}>
        <UserInputField onSubmit={onSubmit} />
        <TodoItemList todoItemList={todoItemList} onTodoItemClick={onTodoItemClick} onRemoveClick={onRemoveClick} />
      </Box>
    </Box>
  );
}

export default App;
