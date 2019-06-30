import React from "react";

import {
  Checkbox,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  ListItemText,
  MenuItem
} from "@material-ui/core";
import Select, { SelectProps } from "@material-ui/core/Select";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120
    },
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    selectEmpty: {
      marginTop: theme.spacing.unit
    }
  });

interface IBaseProps {
  choices: string[];
  field: string;
  helper: string;
  notify: (parameter: string, value: string[]) => void;
  parameter: string;
  multiple: boolean;
}

type Props = IBaseProps & WithStyles<typeof styles>;

interface IStateType {
  select: string[];
}

class SimpleSelect extends React.Component<Props, IStateType> {
  constructor(props: Props) {
    super(props);
    this.state = {
      select: []
    };
  }

  public render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-helper">{this.props.field}</InputLabel>
          <Select
            value={this.state.select}
            multiple={this.props.multiple}
            onChange={this.handleChange}
            input={<Input name="select" id="select-helper" />}
            renderValue={this.buildRenderValue}
          >
            {this.props.choices.length > 0 ? (
              this.renderSingleMenu()
            ) : (
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            )}
          </Select>
          <FormHelperText>{ this.props.helper}</FormHelperText>
        </FormControl>
      </form>
    );
  }

  protected handleChange = (event: any) => {
    this.setState({ select: event.target.value });
    this.props.notify(this.props.parameter, event.target.value);
  };

  protected buildRenderValue: SelectProps["renderValue"] = input => {
    if (!input) {
      // empty case
      return "";
    }
    let selected = [];
    if (!Array.isArray(input)) {
      selected.push(input);
    } else {
      selected = input;
    }
    let toRender = selected.join(", ");
    if (toRender.length > 24) {
      // limit the display size to 24 char.
      toRender = `${toRender.substr(0, 20)}...`;
    }
    return toRender;
  };

  private readonly renderSingleMenu = () => {
    if (this.props.multiple) {
      return this.props.choices.map((o, i) => (
        <MenuItem key={i} value={o}>
          <Checkbox
            checked={this.state.select.indexOf(o) > -1}
            color="primary"
          />
          <ListItemText primary={o} />
        </MenuItem>
      ));
    }
    return this.props.choices.map((o, i) => (
      <MenuItem key={i} value={o}>
        {o}
      </MenuItem>
    ));
  };
}

export default withStyles(styles)(SimpleSelect);
