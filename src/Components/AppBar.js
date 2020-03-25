import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#232222'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div >
      <AppBar position="static" style={{background: '#1f1e1e'}}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            {props.AppBarText}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
