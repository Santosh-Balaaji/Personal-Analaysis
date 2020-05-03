import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Grid,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        position:'relative',
        
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} justifycontent="center" spacing={10}>
      <Grid  row >
      <Button variant="contained" color="primary" style={{right:'10%'}}>
        <Typography style={{fontSize:'100%'}}>50% chance of winning a three weeks trip to england, france and italy</Typography>
      </Button>
      <Button variant="contained" color="primary" style={{left:'10%'}}>
      <Typography style={{fontSize:'100%'}}>50% chance of winning a one week trip to France</Typography>
      </Button>
      </Grid>
    </div>
  );
}
