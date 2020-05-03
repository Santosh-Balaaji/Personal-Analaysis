import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: '2%',
      width: '100%',
      height: '20%',
    },
  },
  typo:{
    fontFamily:"unset",
        color:"#576071",
  }
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.typo} >{props.Description} </Typography> 
    </div>
  );
}