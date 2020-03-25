import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: '150rem',
      height: '15rem',
    backgroundColor: '#e0e0e0',
    },
  },
  typo:{
    margin: '50px'
  }
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} >
      <Typography variant="h6" className={classes.typo} >{props.Description} </Typography> 
          </Paper>
    </div>
  );
}