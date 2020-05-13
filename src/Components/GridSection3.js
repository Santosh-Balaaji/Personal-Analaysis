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

export default function Section3Grid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} row  >
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
              <div>
              <div className="header-text-font-result">LOSS AVERSION </div>
              <div className="text-font" style={{paddingTop:'2%'}}>Loss aversion refers to people's tendency to prefer avoiding losses to acquiring equivalent gains: it is better to not lose INR 500 than to find INR 500.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>  
            <div>
              <div className="header-text-font-result">REGRET AVOIDANCE</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Regret avoidance is a theory used to explain the tendency of investors to refuse to admit that a poor investment decision was made.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">MENTAL ACCOUNTING </div>
              <div className="text-font" style={{paddingTop:'2%'}}>Mental accounting refers to the different values people place on money, based on subjective criteria, that often has detrimental results.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">OVERCONFIDENCE</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Overconfidence refers to the phenomenon that people's confidence in their judgments and knowledge is higher than the accuracy of these judgments.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">ANCHORING</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Anchoring bias occurs when people rely too much on pre-existing information or the first information they find when making decisions.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">HERDING</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Herd mentality bias refers to investors' tendency to follow and copy what other investors are doing. They are largely influenced by emotion and instinct, rather than by their independent analysis.
              </div>   
               </div>   
              </Paper>
        </Grid>
        </Grid>
       </div>
  );
}

