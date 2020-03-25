import React from 'react';
import {Grid,Box,Paper} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
export default class Section1 extends React.Component {
    
    state ={
        slider1:1,
        slider2:1,
        slider3:1,
        slider4:1,
        slider5:1,
        slider6:1,
        marks : [
            {
              value: 1,
              label: 'Strongly InAccurate',
            },
            {
              value: 2,
              label: 'InAccurate',
            },
            {
              value: 3,
              label: 'Neutral',
            },
            {
              value: 4,
              label: 'Accurate',
            },
            {
              value: 5,
              label: 'Strongly Accurate',
            }
          ]

    }
    onChange1=(event,value)=>{
        this.setState({slider1: value},function(){
            console.log(this.state.slider1);
        });
    }
    onChange2=(event,value)=>{
        this.setState({slider2: value},function(){
            console.log(this.state.slider2);
        });
    }
    onChange3=(event,value)=>{
        this.setState({slider3: value},function(){
            console.log(this.state.slider3);
        });
    }
    onChange4=(event,value)=>{
        this.setState({slider4: value},function(){
            console.log(this.state.slider4);
        });
    }
    onChange5=(event,value)=>{
        this.setState({slider5: value},function(){
            console.log(this.state.slider5);
        });
    }
    onChange6=(event,value)=>{
        this.setState({slider6: value},function(){
            console.log(this.state.slider6);
        });
    }
    render(){
        const defaultProps = {
          bgcolor: 'background.paper',
          m: 6,   
          style: { width: '70rem', height: '73rem' },
          borderColor: 'grey.500',
        };

        return (
          <div style={{backgroundColor: 'rgba(0, 0, 0, 0.54)'}}>
                <ButtonAppBar AppBarText={'BEHAVOIRAL BIASES'}/>
              <Box display="flex" justifyContent="center">
              <Box border={1} {...defaultProps}>
              <Grid container>
            <Sliders sliderTypo={'1. AFTER A PRIOR LOSS, I BECOME MORE RISK AVERSE'} onChange={this.onChange1} marks={this.state.marks} />
            <Sliders sliderTypo={'2. I AVOID SELLING INVESTMENTS THAT HAVE DECREASE IN VALUE ANS READILY SELL INVESTMENTS THAT HAVE AN INCREASE IN VALUE'} onChange={this.onChange2} marks={this.state.marks}  />
            <Sliders sliderTypo={'3. I TEND TO TREAT EACH ELEMENT OF MY INVESTMENT PORTFOLIO SEPARATELY'} onChange={this.onChange3} marks={this.state.marks}  />
            <Sliders sliderTypo={'4. I BELIEVE THAT MY SKILLS AND KNOWLEDGE ARE ADEQUATE THAT CAN HELP ME TO OUT PERFORM THE MARKET'} onChange={this.onChange4} marks={this.state.marks} />
            <Sliders sliderTypo={'5. I FORECAST THE CHANGES IN PRICES IN THE FUTURE PERIODS ON THE RECENT PRICES'}  onChange={this.onChange5} marks={this.state.marks} />
            <Sliders sliderTypo={'6. I USUALLY REACT QUICKLY TO THE CHANGES OF THE OTHER INVESTORS DECISIONS AND FOLLOW THEIR REACTIONS IN THE INVESTMENT MARKET'}  onChange={this.onChange6} marks={this.state.marks} />
              </Grid>
              </Box>
              </Box>
              <NextButton />
              
            </div>
          );
            }
}