import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../Sections/styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width:'90%',
    height:'100%',
    textAlign: 'center',
    padding:'1%',
    color: theme.palette.text.secondary,
    marginLeft:'4%',
    backgroundColor:'unset',
    padding:'0px 0px',
    
  },
  Typo:{
    [theme.breakpoints.down('md')]:{
      fontSize:'0.7em'
      },
      [theme.breakpoints.up('sm')]:{
        fontSize:'1.1em'
      },
      [theme.breakpoints.up('lg')]:{
        fontSize:'1.5em'
      }
  },

  
}));

export default function GridSection2(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} row  >
        <Grid item xs={12} lg={12} style={{padding:'30px 0px',paddingTop:'4%'}}>
          <Paper className={classes.paper} elevation={18}>
            <div className="header-tab2">{props.header}</div>
              <div className="text-font" style={{paddingTop:'2%'}}>{props.body}
               </div>   
              </Paper>
        </Grid>
        </Grid>
       </div>
  );
}
