import React from 'react';
import {Grid,Box,Paper,Slider,Typography} from '@material-ui/core';
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
        boxShadow: '0 3px 5px 2px rgba(135, 135, 171, .3)',
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
  
  export default function CenteredGrid() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
    
      const { gilad, jason, antoine } = state;

      const defaultProps = {
        bgcolor: 'background.paper',
        m: 6,   
        style: { width: '70rem', height: '60rem' },
        borderColor: 'grey.500',
        
      };
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
      
  
    return (
      <div>
        <Box display="flex" justifyContent="center">
        <Box border={1} {...defaultProps}>
        <Grid container>
            
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
          <div className={classes.slider} style={{marginLeft:'25em'}}>
          <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        1. HAVE FEW ARTISTIC SKILLS		
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={1}
        max={5}
        />
        </div>
        </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs >
          <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom >
        2. INSISTS UNTIL COMPLETING THE WORK IN AN ORGANIZED MANNER					
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
        />
        </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
              Hello3
          </Grid>
        </Grid>
      </Paper>
        </Grid>
        </Box>
        </Box>
      </div>
    );
  }
  