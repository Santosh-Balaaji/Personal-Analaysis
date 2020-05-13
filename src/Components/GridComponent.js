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

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} row  >
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
              <div>
              <div className="header-text-font-result">CONSCIENTIOUSNESS</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Conscientiousness describes how organized and dependable you are. People who rate high in conscientiousness are efficient and organized. People who rate low in conscientiousness are more easy-going and laid back. If you rate high in conscientiousness, you want to make sure the people around you respect your desire to have a plan. But don’t get too frustrated with people who rate low in conscientiousness, you can’t blame them for not being organized. It just doesn’t come as naturally.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>  
            <div>
              <div className="header-text-font-result">EXTROVERSION</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Extroversion describes how you interact with people. People who rate high in extroversion are outgoing and energetic. People who rate low in extroversion are more solitary and reserved. If you rate low in extroversion, be sure to not force yourself to try being extroverted. Honour your introversion. You never want to try being something or someone you are not. Think of the places and people who get you excited and stick to those nourishing spots. This helps you stay true to yourself.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">OPENNESS</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Openness is when someone is curious and open minded to new experiences and knowledge. People who rate high in openness are inventive and curious. People who rate low in openness are consistent and cautious. If you rate high in openness, let people in your life know that you love to be challenged. Make sure you have creative outlets to express yourself. You also have to make sure your close ones knows your level of adventure, so your needs are met.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">AGREEABLENESS</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Agreeableness is how you feel toward others. People who rate high in agreeableness are friendly and compassionate. People who rate low in agreeableness are more analytical and detached. If you rate low in agreeableness, empathy doesn’t come as naturally to you. So, your partner might say things such as, ‘Don’t you understand me?’ or, ‘Why don’t you get me?’ That’s okay. Know that you have to make more of a mental effort to put yourself in their shoes.
              </div>   
               </div>   
              </Paper>
        </Grid>
        <Grid item xs={12} lg={4} style={{padding:'30px 0px'}}>
          <Paper className={classes.paper} elevation={18}>
          <div>
              <div className="header-text-font-result">NEUROTICISM</div>
              <div className="text-font" style={{paddingTop:'2%'}}>Neuroticism is how you deal with emotions. People who rate high in neuroticism are sensitive and tend to be more nervous. People who rate low in neuroticism tend to be more secure and stable. If you rate high in neuroticism, you have to know your triggers, what makes you worry. And your calmers, what helps you calm down. So you can be more in control of your moods.
              </div>   
               </div>   
              </Paper>
        </Grid>
        </Grid>
       </div>
  );
}

