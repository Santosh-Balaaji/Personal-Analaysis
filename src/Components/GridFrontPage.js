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
  
}));

export default function GridPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} row  >
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
              <div className="header-text-font">BIG FIVE FACTOR THEORY</div>
              <div className="text-font-front" style={{paddingTop:'2%'}}>The big five personality traits are the best accepted and most commonly used model of personality in academic psychology. The results of this test are not psychological or psychiatric advice of any kind and come with no guarantee of accuracy or fitness for a particular purpose to explore your personality with the highly respected big five-factor model. You will see how you will stack up the five dimensions: OCEAN
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
              <div className="header-text-font">PROSPECTS THEORY</div>
              <div className="text-font-front" style={{paddingTop:'2%'}}>Prospects theory is a behavioral model that shows how people decide between alternatives that involve risk and uncertainty (e.g. percentage likelihood of gains or losses). It demonstrates that people think in terms of expected utility relative to a reference point (e.g. current wealth) rather than absolute outcomes.
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
              <div className="header-text-font">BEHAVIORAL BIASES</div>
              <div className="text-font-front" style={{paddingTop:'2%'}}>While one’s biases can serve us well in our lives, they can have the opposite effect with investing. Investing behavioral biases encompass both cognitive and emotional biases. Cognitive biases stem from statistical, information processing or memory errors and emotional biases stem from intuition or impulse. 
               </div>   
              </Paper>
        </Grid>
        </Grid>
       </div>
  );
}
