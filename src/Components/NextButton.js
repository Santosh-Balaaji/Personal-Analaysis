import React from 'react';
import {Button,Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
      
      borderRadius:'3em',
      [theme.breakpoints.down('md')]:{
        width:'7em',
        height:'3em'
        },
        [theme.breakpoints.up('sm')]:{
          width:'10em',
          height:'4em'
        },
        [theme.breakpoints.up('lg')]:{
          width:'15em',
          height:'4em'
    
        }
    },

  }));

export default function NextButton(props){
    const classes = useStyles();
    return(
      <div style={{padding:'100px'}}> 
        <Button 
        variant="contained"
        color="secondary"
        style={{backgroundColor:"#1f1e1e"}}
        endIcon={<Icon>send</Icon>}
        onClick={props.onclick}
        className={classes.button}
      >
        Next
      </Button>
      </div>
    );
}