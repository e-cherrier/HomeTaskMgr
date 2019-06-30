import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

interface ITest {
  saveTodo: (todoText:string) => void;
}

const TodoForm: React.FC<ITest> = ( props ) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
