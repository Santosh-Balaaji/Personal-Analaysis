import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Grid,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        position:'relative',
        top:'1em',    
    }
    
    },
    buttonSizing:{
        [theme.breakpoints.down('md')]:{
            fontSize:'1em',
            width:'7em',
            },
            [theme.breakpoints.up('sm')]:{
                fontSize:'1.2em',
                width:'12em',

            },
            [theme.breakpoints.up('lg')]:{
                fontSize:'1.5em',
                width:'20em',

            }
  },
  textSizing:
  {
    [theme.breakpoints.down('md')]:{
      fontSize:'1em',
      },
      [theme.breakpoints.up('sm')]:{
          fontSize:'1.2em',

      },
      [theme.breakpoints.up('lg')]:{
          fontSize:'1.5em',

      }
  }
}));

function onButton1Click(onChange)
{
  document.getElementById("Button1").style.opacity="1";
  document.getElementById("Button2").style.opacity="0.5";
  var value=document.getElementById("Button1").value;
  onChange(value); 

}


function onButton2Click(onChange,button1Id,button2Id)
{
  document.getElementById(button1Id).style.opacity="0.5";
  document.getElementById(button2Id).style.opacity="1";
  var value=document.getElementById(button2Id).value;
  onChange(value); 

}
export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} justifycontent="center" >
      <Typography className={classes.textSizing}>OR</Typography>
      <Grid >
      <Button variant="contained" style={{right:'5%'}} color="primary" id={props.button1Id} value="option1" onClick={()=>onButton1Click(props.onChange,props.button1Id,props.button2Id)} >
        <Typography className={classes.buttonSizing}>{props.option1}</Typography>
      </Button>

      <Button variant="contained" color="primary" style={{left:'5%'}} id={props.button2Id} value="option2" onClick={()=>onButton2Click(props.onChange,props.button1Id,props.button2Id)}>
  <Typography className={classes.buttonSizing}>{props.option2}</Typography>
      </Button>
     
      </Grid>
    </div>
  );
}
