import React from 'react';
import {Grid,Paper,Slider,Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        height: '8rem',
        width:'69rem',
        padding: '10px 10px',
        margin: `${theme.spacing(1)}px auto`,
    },
    margin: {
        height: theme.spacing(3),
        left: 400
      },
      slider:{
          width: 400,
          left: 400
      }

  }));
  const marks = [
    {
      value: 1,
      label: 'Strongly Disagree',
    },
    {
      value: 2,
      label: 'Disagree',
    },
    {
      value: 3,
      label: 'Neutral',
    },
    {
      value: 4,
      label: 'Agree',
    },
    {
      value: 5,
      label: 'Strongly Agree',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }
  

export default function Sliders(props){
    const classes = useStyles();
    return(
<Paper elevation={5} className={classes.paper} >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs >
          <div className={classes.margin} />
      <Typography variant='h6' id="discrete-slider-custom" gutterBottom >
        {props.sliderTypo}					
      </Typography>
      <div className={classes.slider} style={{marginLeft:'25em'}}>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
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
