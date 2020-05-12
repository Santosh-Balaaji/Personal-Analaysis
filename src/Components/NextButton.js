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
      <div>
      <div style={{padding:'100px',paddingBottom:'20px'}}> 
        <Button 
        variant="contained"
        id="Button"
        value="send"
        color="secondary"
        style={{backgroundColor:"#1f1e1e"}}
        endIcon={<Icon>send</Icon>}
        onClick={props.onclick}
        className={classes.button}
        disabled={props.disable}
      >
        Next
      </Button>
      
      </div>
      <div style={{paddingBottom:'50px',fontFamily:'auto'}}>
      Note: Please Select All Options to Proceed to the Next Section
      </div>
      </div>
    );
}