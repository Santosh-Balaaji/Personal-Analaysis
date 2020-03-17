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
        color="primary"
        size="large"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    );
}