import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Grid,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        
    }
    
    },
    buttonSizing:{
        [theme.breakpoints.down('md')]:{
            fontSize:'0.7em',
            },
            [theme.breakpoints.up('sm')]:{
                fontSize:'0.9em',
    
            },
            [theme.breakpoints.up('lg')]:{
                fontSize:'1em',
    
            }
  },
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} justifycontent="center" >
      <Grid  row >
      <Button variant="contained" color="primary"  >
        <Typography className={classes.buttonSizing}>50% chance of winning a three weeks trip to england, france and italy</Typography>
      </Button>
      <Typography className={classes.buttonSizing}>OR</Typography>

      <Button variant="contained" color="primary" >
        <Typography className={classes.buttonSizing}>50% chance of winning a three weeks trip to england, france and italy</Typography>
      </Button>
     
      </Grid>
    </div>
  );
}
