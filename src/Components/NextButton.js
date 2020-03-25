import React from 'react';
import {Button,Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function NextButton(){
    const classes = useStyles();
    return(
        <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        style={{backgroundColor:"#1f1e1e"}}
        endIcon={<Icon>send</Icon>}
      >
        Next
      </Button>
    );
}