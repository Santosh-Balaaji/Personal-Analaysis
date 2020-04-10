import React from 'react';
import {Grid,Paper,Slider,Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        height: '100%',
        width:'80%',
        padding: '15px 10px',
        margin: `${theme.spacing(1)}px auto`,
      backgroundColor: '#e0e0e0',

    },
    margin: {
        height: theme.spacing(3),
      },
      slider:{
          width: '80%'
          
      }

  }));

  
  
  
    function valuetext(value) {
    return `${value}`;
  }
  

export default function Sliders(props){
    const classes = useStyles();
    return(
<Paper elevation={5} className={classes.paper} justifyContent="center" >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs >
          <div className={classes.margin} />
      <Typography variant='h6' id="discrete-slider-custom" gutterBottom >
        {props.sliderTypo}					
      </Typography>
      <div className={classes.slider} style={{marginLeft:'10%'}}>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={props.marks}
        min={1}
        max={5}
        onChange={(event,value)=>props.onChange(event,value)}
        />
        </div>
          </Grid>
        </Grid>
      </Paper>
    );
}
