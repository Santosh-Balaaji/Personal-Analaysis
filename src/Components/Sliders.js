import React from 'react';
import {Grid,Paper,Slider,Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CustomizedRadios from "../Components/RadioTabs";
import Dividers from './Divider';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
   
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

  
  
  
    function valuetext(value) {
    return `${value}`;
  }
  

export default function Sliders(props){
    const classes = useStyles();
    return(
        <Grid container wrap="nowrap" spacing={2} justifycontent="center">
          <Grid item xs >
        <Dividers/>

          <div className={classes.margin} />
      <Typography variant='h6' id="discrete-slider-custom" className={classes.typo} gutterBottom >
        {props.sliderTypo}					
      </Typography>
      <div className={classes.slider} style={{marginLeft:'10%'}}>
      <CustomizedRadios onChange={props.onChange}/>
        </div>
          </Grid>
        </Grid>
    );
}
