import React from 'react';

import Grid from "@material-ui/core/Grid";

import TaskCard from "./Card";
import { Typography } from '@material-ui/core';

interface ITest {
  todos:string[]
  deleteTodo:(i:number)=>void
}

const TodoList: React.FC<ITest> = ( {todos, deleteTodo} ) => (
  todos ?
  <Grid container={true} spacing={8}>
    {todos.map((todo, index) => (
      <Grid item={true} >
              <TaskCard title={todo} difficulty={"Cool"} frequency={1} />
      </Grid>
    ))}
  </Grid> : <Typography>None</Typography>
); 

export default TodoList;
