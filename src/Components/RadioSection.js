import React from 'react';
import {Grid,Paper,Slider,Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CustomizedRadios from "./RadioTabs";
import Dividers from './Divider';
import Buttons from './Button';
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
      }

  }));

  
  
  
    
  

export default function RadioSection(props){
    const classes = useStyles();
    return(
        <Grid container wrap="nowrap" spacing={2} justifycontent="center">
          <Grid item xs >
        <Dividers/>

          <div className={classes.margin} />
      <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        					CAN YOU CHOOSE ONE?
      </Typography>
      <div className={classes.slider} style={{marginLeft:'10%'}}>
        <Buttons option1={props.radioOption1} option2={props.radioOption2} onChange={props.onChange} button1Id={props.button1Id} button2Id={props.button2Id} />
        </div>
          </Grid>
        </Grid>
    );
}
