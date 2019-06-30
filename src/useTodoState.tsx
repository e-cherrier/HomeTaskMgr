import { useState } from 'react';

const initialValue = ([])=> {
  const [todos, setTodos] = useState<string[]>( [] as string[] ) ;

  // const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText:string) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex:number) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};
export default initialValue;
