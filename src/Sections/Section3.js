import React from 'react';
import {Grid,Box,Paper} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
export default class Section1 extends React.Component {
    
    state ={
        slider1:"",
        slider2:"",
        slider3:"",
        slider4:"",
        slider5:"",
        slider6:"",
        
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
          <div>
                <ButtonAppBar AppBarText={'BEHAVOIRAL BIASES'}/>
            <Sliders sliderTypo={'1. AFTER A PRIOR LOSS, I BECOME MORE RISK AVERSE'} onChange={this.onChange1}  />
            <Sliders sliderTypo={'2. I AVOID SELLING INVESTMENTS THAT HAVE DECREASE IN VALUE ANS READILY SELL INVESTMENTS THAT HAVE AN INCREASE IN VALUE'} onChange={this.onChange2}   />
            <Sliders sliderTypo={'3. I TEND TO TREAT EACH ELEMENT OF MY INVESTMENT PORTFOLIO SEPARATELY'} onChange={this.onChange3}  />
            <Sliders sliderTypo={'4. I BELIEVE THAT MY SKILLS AND KNOWLEDGE ARE ADEQUATE THAT CAN HELP ME TO OUT PERFORM THE MARKET'} onChange={this.onChange4}  />
            <Sliders sliderTypo={'5. I FORECAST THE CHANGES IN PRICES IN THE FUTURE PERIODS ON THE RECENT PRICES'}  onChange={this.onChange5}  />
            <Sliders sliderTypo={'6. I USUALLY REACT QUICKLY TO THE CHANGES OF THE OTHER INVESTORS DECISIONS AND FOLLOW THEIR REACTIONS IN THE INVESTMENT MARKET'}  onChange={this.onChange6}  />
              <NextButton />
           </div>   
          );
            }
}