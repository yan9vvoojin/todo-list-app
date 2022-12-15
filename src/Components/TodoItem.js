import Box from '@mui/system/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const TodoItem = ({ todoItem, onTodoItemClick, onRemoveClick }) => {
  const style = todoItem.isFinished ? { textDecoration: 'line-through' } : {};

  const onClick= () => {
    onTodoItemClick(todoItem);
  };


  return (
    <Box style={boxStyle}>
      <span style={style} onClick={onClick}>
        <Checkbox checked={todoItem.isFinished} />
        {todoItem.content}
      </span>
      <IconButton aria-label='delete' size='small' onClick={() => onRemoveClick(todoItem)}>
        <DeleteIcon fontSize='inherit' />
      </IconButton>
    </Box>
  );
};

export default TodoItem;
