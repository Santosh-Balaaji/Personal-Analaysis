import React from 'react';
import {Grid,Paper,Slider,Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CustomizedRadios from "../Components/RadioTabs";
import Dividers from './Divider';
import clsx from "clsx";
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
      },
      Typo_text:{
        [theme.breakpoints.down('md')]:{
          fontSize: '0.9em',
            fontWeight: '500',
          },
          [theme.breakpoints.up('sm')]:{
            fontSize: '1.1em',
            fontWeight: '500',
          },
          [theme.breakpoints.up('lg')]:{
            fontSize: '1.25em',
            fontWeight: '500',
      
          }
        }

  }));

  
  
  
    function valuetext(value) {
    return `${value}`;
  }
  

export default function Sliders(props){
    const classes = useStyles();
    return(
        <Grid container wrap="nowrap"  justifycontent="center">
          <Grid item xs >
        <Dividers/>

          <div className={classes.margin} />
      <Typography className={clsx(classes.Typo_text,classes.typo)}  id="discrete-slider-custom"  gutterBottom >
        {props.sliderTypo}					
      </Typography>
      <div className={classes.slider} style={{marginLeft:'10%'}}>
      <CustomizedRadios onChange={props.onChange}/>
        </div>
          </Grid>
        </Grid>
    );
}
