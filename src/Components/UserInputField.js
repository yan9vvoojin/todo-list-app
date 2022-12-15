import { useState } from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  '& input': { height: 1 }
};

const UserInputField = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const onClick = () => {
    if (input === '') {
      setIsInvalidInput(true);
      return;
    }
    const newTodoItem = {
      content: input,
      isFinished: false
    };
    onSubmit(newTodoItem);
    setInput('');
    setIsInvalidInput(false);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <Box sx={boxStyle}>
      <TextField fullWidth id='outlined-basic' label='할일' variant='outlined' error={isInvalidInput} value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={onEnterPress} />
      <Button variant='contained' onClick={onClick}><AddIcon /></Button>
    </Box>
  );
};

export default UserInputField;
