import React from "react";

import { InputAdornment, TextField } from "@material-ui/core";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing.unit
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 20
    },
    textField: {
      flexBasis: 200,
      maxWidth: 120
    }
  });

interface IBaseProps {
  label: string;
  parameter: string;
  helperText: string;
  onChange: (parameter: string, value: any) => void;
  unite? : string;
}

type Props = IBaseProps & WithStyles<typeof styles>;

interface IStateType {
  currentValue: any;
} 

export class TextFieldBase extends React.Component<Props, IStateType> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentValue: undefined
    };
  }

  public onChange = (event: any) => {
    const currentValue = event.target.value;
    this.setState({ currentValue });
    return this.props.onChange(this.props.parameter, currentValue);
  };

  public render() {
    const classes = this.props.classes;

    let endAdornment = null;
    if( this.props.unite ) {
        endAdornment = <InputAdornment position="end">{this.props.unite}</InputAdornment>;
    }
    return (
      <TextField
        label={this.props.label}
        id="simple-start-adornment"
        helperText={this.props.helperText}
        InputProps={{
          endAdornment,
          onChange: this.onChange,
          value: this.state.currentValue
        }}
      />
    );
  }
}

const TextFieldWrapper = withStyles(styles)(TextFieldBase);

export default TextFieldWrapper;
