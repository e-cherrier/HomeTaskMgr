import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography
} from "@material-ui/core";

import red from "@material-ui/core/colors/red";

import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  PlayArrow as PlayIcon,
  Share as ShareIcon
} from "@material-ui/icons";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 400
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    actions: {
      display: "flex"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red["500"]
    }
  });

export interface ITaskProps {

  title: string;
  difficulty: string;
  frequency: number;
  desc?:string;
}

interface IState {
  ok: boolean;
  expanded: boolean;
}

type Props = ITaskProps & WithStyles<typeof styles>;

class AppCardBase extends React.PureComponent<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = { ok: true, expanded: false };
  }

  public handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  public render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} id={this.props.title}>
        <CardHeader
          title={this.props.title}
          subheader={this.props.title}
        />
        <CardContent>
          <Typography component="p">{this.props.title}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing={true}>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        {this.props.desc ? 
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit={true}>
          <CardContent>
            <Typography paragraph={true}>{this.props.desc}</Typography>
          </CardContent>
        </Collapse> : null}
      </Card>
    );
  }
}

export default withStyles(styles)(AppCardBase);
