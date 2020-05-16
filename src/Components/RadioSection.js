import React from 'react';
import {Grid,Paper,Slider,Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CustomizedRadios from "./RadioTabs";
import Dividers from './ComponentDivider';
import {Button} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
        margin: {
        height: theme.spacing(8),
      },
      slider:{
          width: '80%'
      },
      typo:{
        fontFamily:"unset",
        color:"#576071",
        marginBottom:"1.5em"
      },
      root: {
        '& > *': {
            position:'relative',
            top:'-3em',    
        }
        
        },
        buttonSizing:{
           paddingTop:'1em',
           paddingBottom:'1em',
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
          fontSize:'0.7em',
          },
          [theme.breakpoints.up('sm')]:{
              fontSize:'1em',
    
          },
          [theme.breakpoints.up('lg')]:{
              fontSize:'1.3em',
    
          }
      }

  }));

  function onButton1Click(onChange)
{
  document.getElementById("Button1").style.opacity="0.5";
  document.getElementById("Button2").style.opacity="1";
  var value=document.getElementById("Button1").value;
  onChange(value); 

}


function onButton2Click(onChange)
{
  document.getElementById("Button1").style.opacity="1";
  document.getElementById("Button2").style.opacity="0.5";
  var value=document.getElementById("Button2").value;
  onChange(value); 

}

function onButton3Click(onChange)
{
  document.getElementById("Button4").style.opacity="1";
  document.getElementById("Button3").style.opacity="0.5";
  var value=document.getElementById("Button3").value;
  onChange(value); 

}  
function onButton4Click(onChange)
{
  document.getElementById("Button3").style.opacity="1";
  document.getElementById("Button4").style.opacity="0.5";
  var value=document.getElementById("Button4").value;
  onChange(value); 

}  
function onButton5Click(onChange)
{
  document.getElementById("Button6").style.opacity="1";
  document.getElementById("Button5").style.opacity="0.5";
  var value=document.getElementById("Button5").value;
  onChange(value); 

}  
function onButton6Click(onChange)
{
  document.getElementById("Button5").style.opacity="1";
  document.getElementById("Button6").style.opacity="0.5";
  var value=document.getElementById("Button6").value;
  onChange(value); 

}  

function onButton7Click(onChange)
{
  document.getElementById("Button8").style.opacity="1";
  document.getElementById("Button7").style.opacity="0.5";
  var value=document.getElementById("Button7").value;
  onChange(value); 

}  
function onButton8Click(onChange)
{
  document.getElementById("Button7").style.opacity="1";
  document.getElementById("Button8").style.opacity="0.5";
  var value=document.getElementById("Button8").value;
  onChange(value); 

}  
function onButton9Click(onChange)
{
  document.getElementById("Button10").style.opacity="1";
  document.getElementById("Button9").style.opacity="0.5";
  var value=document.getElementById("Button9").value;
  onChange(value); 

}  
function onButton10Click(onChange)
{
  document.getElementById("Button9").style.opacity="1";
  document.getElementById("Button10").style.opacity="0.5";
  var value=document.getElementById("Button10").value;
  onChange(value); 

}  
    
  

export default function RadioSection(props){
    const classes = useStyles();
    return(
        <Grid container wrap="nowrap"   justifycontent="center">
          <Grid item xs >
        <Dividers/>

          <div className={classes.margin} />
      
        <div className={classes.root} justifycontent="center" >
        <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        					CAN YOU CHOOSE ONE?
      </Typography>
    
      <Typography className={classes.textSizing}>OR</Typography>
      <Grid >
      <Button variant="contained" style={{right:'5%'}} color="primary" id="Button1" value="option1" onClick={()=>onButton1Click(props.onChange1)} >
        <Typography className={classes.buttonSizing}>33% chance of winning INR 2550<br/> AND <br/> 67% chance of winning INR 2500</Typography>
      </Button>

      <Button variant="contained" color="primary" style={{left:'5%'}} id="Button2" value="option2" onClick={()=>onButton2Click(props.onChange1)}>
  <Typography className={classes.buttonSizing}>100% chance of winning INR 2500</Typography>
      </Button>
     
      <Dividers/>

      </Grid>
    </div>

    <div className={classes.root} justifycontent="center" >
    <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        					CAN YOU CHOOSE ONE?
      </Typography>
    
    
      <Typography className={classes.textSizing}>OR</Typography>
      <Grid >
      <Button variant="contained" style={{right:'5%'}} color="primary" id="Button3" value="option1" onClick={()=>onButton3Click(props.onChange2)} >
        <Typography className={classes.buttonSizing}>65% chance of winning INR 5500</Typography>
      </Button>

      <Button variant="contained" color="primary" style={{left:'5%'}} id="Button4" value="option2" onClick={()=>onButton4Click(props.onChange2)}>
  <Typography className={classes.buttonSizing}>95% chance of winning INR 3000</Typography>
      </Button>
    <Dividers/>
     
      </Grid>
    </div>

    <div className={classes.root} justifycontent="center" >
    <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        					CAN YOU CHOOSE ONE?
      </Typography>
    
      <Typography className={classes.textSizing}>OR</Typography>
      <Grid >
      <Button variant="contained" style={{right:'5%'}} color="primary" id="Button5" value="option1" onClick={()=>onButton5Click(props.onChange3)} >
        <Typography className={classes.buttonSizing}>5% chance of winning INR 6000</Typography>
      </Button>

      <Button variant="contained" color="primary" style={{left:'5%'}} id="Button6" value="option2" onClick={()=>onButton6Click(props.onChange3)}>
  <Typography className={classes.buttonSizing}>35% chance of winning INR 3500</Typography>
      </Button>
      <Dividers/>
     
      </Grid>
    </div>
    <div className={classes.root} justifycontent="center" >
    <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        					CAN YOU CHOOSE ONE?
      </Typography>
    
      <Typography className={classes.textSizing}>OR</Typography>
      <Grid >
      <Button variant="contained" style={{right:'5%'}} color="primary" id="Button7" value="option1" onClick={()=>onButton7Click(props.onChange4)} >
        <Typography className={classes.buttonSizing}>35% chance of winning a three week trip to England, France and Italy <br/>AND <br/> 50% chance of winning nothing</Typography>
      </Button>

      <Button variant="contained" color="primary" style={{left:'5%'}} id="Button8" value="option2" onClick={()=>onButton8Click(props.onChange4)}>
  <Typography className={classes.buttonSizing}>85% chance of winning a one week trip to England</Typography>
      </Button>
      <Dividers/>
     
      </Grid>
    </div>
    <div className={classes.root} justifycontent="center" >
    <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        					CAN YOU CHOOSE ONE?
      </Typography>
    
      <Typography className={classes.textSizing}>OR</Typography>
      <Grid >
      <Button variant="contained" style={{right:'5%'}} color="primary" id="Button9" value="option1" onClick={()=>onButton9Click(props.onChange5)} >
        <Typography className={classes.buttonSizing}>10% chance of winning a four week trip to england</Typography>
      </Button>

      <Button variant="contained" color="primary" style={{left:'5%'}} id="Button10" value="option2" onClick={()=>onButton10Click(props.onChange5)}>
  <Typography className={classes.buttonSizing}>90% chance of winning two week trip to england and germany</Typography>
      </Button>
     
      </Grid>
    </div>

          </Grid>
        </Grid>
    );
}
