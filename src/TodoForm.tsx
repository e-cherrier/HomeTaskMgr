import React from 'react';
import {Grid, Button} from '@material-ui/core';
import useInputState from './useInputState';

import InputField from "./InputField";
import Selector from "./Selector";


import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    optionFormControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      alignItems: "center"
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    }
  });

interface ITest {
  saveTodo: (todoText:string) => void;
}

type Props = ITest & WithStyles<typeof styles>;

const TodoForm: React.FC<Props> = ( props ) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.saveTodo(value);
        reset();
      }}
    >
    <Grid container={true} spacing={16}>
      <Grid item={true}>
      <InputField
        label="Nom"
        parameter="nom"
        helperText="Dénomination de la tâche"
        onChange={onChange}
      />
      </Grid>
      <Grid item={true}>
      <Selector
      parameter="difficulte"
      field="Difficulté"
      helper="ordre croissant"
      multiple={false}
      notify={onChange}
      choices={["1","2","3","4","5"]}
      />
      </Grid>
      <Grid item={true}>
      <InputField
        label="Récurrence"
        parameter="recurrence"
        helperText="Quelle est la fréquence idéale?"
        onChange={onChange}
        unite="jour(s)"
      />
      </Grid>
      <Grid item={true}>
      <Selector
      parameter="assigne"
      field="Pour qui ?"
      helper="choisir une ou plusieurs personne(s)"
      multiple={true}
      notify={onChange}
      choices={["Tout le monde","Aloys", "Jeanne", "Félicie","Agnes", "Etienne"]}
      />
      </Grid>
      <Grid item={true}>
          <Button
            name="compute"
            variant="contained"
            color="secondary"
            onClick={onChange}
          >
            Ajouter
          </Button>
      </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(TodoForm);
