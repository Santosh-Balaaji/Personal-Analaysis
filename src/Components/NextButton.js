import React from 'react';
import {Button,Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
      marginTop:"8%",
      width:"17%",
      height:"58px",
      borderRadius:"28px",
      marginBottom:"10%"
    },
  }));

export default function NextButton(props){
    const classes = useStyles();
    return(
        <Button style={{maxWidth:'30px',maxHeight:'50px',minWidth:'20px',minHeight:'30px'}}
        variant="contained"
        color="secondary"
        className={classes.button}
        style={{backgroundColor:"#1f1e1e"}}
        endIcon={<Icon>send</Icon>}
        onClick={props.onclick}
      >
        Next
      </Button>
    );
}