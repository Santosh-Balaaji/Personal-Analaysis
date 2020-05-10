import React from 'react';
import { $CombinedState } from 'redux';
import background from '../Images/woman.jpg';
import { blue } from '@material-ui/core/colors';
import {Image} from 'react-bootstrap';
import { makeStyles,Grid,Paper,Typography } from "@material-ui/core";  
 import "./styles.scss"; 
 import AutoGrid from '../Components/GridComponent';
import NextButton from '../Components/NextButton'; 
import {withRouter} from 'react-router-dom';
import GridPage from '../Components/GridFrontPage';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import FaceIcon from '@material-ui/icons/Face';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';

class Index extends React.Component{
   
    constructor(props)
    {
        super(props);
    }
   
   
    handleClick=()=>{
        this.props.history.push("/Section1");
    }
    render(){
        
        
       
        return(
            <div>
                <div className="main" >
                    <div className="overlay" ></div>
                    <Image src={background} className="image"/>
                    <div className="slider-pos">
                     <h1 className="slider-text" style={{top:'-3%'}}>Personality Analysis</h1>
                     <h1 className="slider-text"> Study On Behavioral Finance</h1>
                     </div>
                    </div>
                    <div className="body-first-text-header">
                        Why Behavioral Finance?</div>
                    <div className="body-first-text">
                    We make thousands of decisions every day. Do I cross the road now, or wait for the oncoming truck to pass? Should I eat fries or a salad for lunch? How much should I tip the cab driver? We usually make these decisions with almost no thought, using what psychologists call “heuristics” – rules of thumb that enable us to navigate our lives. Without these mental shortcuts, we would be paralyzed by the multitude of daily choices. But in certain circumstances, these shortcuts lead to predictable errors – predictable, that is, if we know what to watch out for. Did you know, for example, that we are naturally biased towards selling investments that are doing well for us, but holding on to those that are doing poorly? Or that we often select sub-optimal insurance payment plans, and routinely purchase insurance that we don’t even need? And why do so many of us fail to enrol in our employer’s corporate retirement plans, even when the employer offers to match our contributions? Behavioral finance is the study of these and dozens of other financial decision-making errors that can be avoided if we are familiar with the biases that cause them.
                    </div>
                    
                    <div className="front-section-grid" >
                        <GridPage />
                        </div>
                        <div style={{backgroundColor:'#f3f4f5', color:'#000',height:'27em'}}>
                        <div style={{fontSize:'2.5rem'}}>
                        INSTRUCTIONS
                            </div>
                            <div >
                                <Grid container >
                                    <Grid item xs={12} lg={6} style={{marginTop:'3em'}}>
                                        <EmojiEmotionsIcon  style={{fontSize:'3em'}}/>
                                        <Typography style={{fontSize:'1.3rem'}}>
                                        Please respond to all the statements sequentially based on your true experiences
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6} style={{marginTop:'3em'}}>
                                        <DoneAllIcon style={{fontSize:'3em'}}/>
                                        <Typography style={{fontSize:'1.3rem'}}>
                                        Double-check before moving on to next
                                        </Typography>
                                    </Grid>
                                   
                                    <Grid item xs={12} lg={6} style={{marginTop:'4em'}}>
                                        <AlarmOffIcon style={{fontSize:'3em'}}/>
                                        <Typography style={{fontSize:'1.3rem'}}>
                                        This test is not time-bound
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6} style={{marginTop:'4em'}}>
                                        <FaceIcon style={{fontSize:'3em'}}/>
                                        <Typography style={{fontSize:'1.3rem'}}>
                                        Describe yourself as you generally are now, not as you wish to be in the future
                                        </Typography>
                                    </Grid>

                                    </Grid>


                                </div>
                                </div>
                    <NextButton onclick={this.handleClick} />

                
                </div>
        );
    }
}

export default withRouter(Index)