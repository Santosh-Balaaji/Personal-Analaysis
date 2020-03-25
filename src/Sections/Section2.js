import React from 'react';
import {Grid,Box} from '@material-ui/core';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import SimplePaper from '../Components/Description';
import RadioButtonsGroup from '../Components/Radio';


export default class Section1 extends React.Component {
    
    state={
        radio1:[],
        radio2:[],
        radio3:[],
        radio4:[],
        radio5:[]
    }
    onChange1=(event,value)=>{
        this.setState({radio1: value},function(){
            console.log(this.state.radio1);
        });
    }
    onChange2=(event,value)=>{
        this.setState({radio2: value},function(){
            console.log(this.state.radio2);
        });
    }
    onChange3=(event,value)=>{
        this.setState({radio3: value},function(){
            console.log(this.state.radio3);
        });
    }
    onChange4=(event,value)=>{
        this.setState({radio4: value},function(){
            console.log(this.state.radio4);
        });
    }
    onChange5=(event,value)=>{
        this.setState({radio5: value},function(){
            console.log(this.state.radio5);
        });
    }
    render(){

        const defaultProps = {
            bgcolor: '#f5f5f5',
            m: 6,   
            style: { width: '70rem', height: '41rem' },
            borderColor: 'grey.500',
            

          };
        return (
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.54)'}}>
            <ButtonAppBar AppBarText={'BIG FIVE FACTOR THEORY'}/>
              <SimplePaper Description={'Prospect theory is a behavioral model that shows how people decide between alternatives that involve risk and uncertainty(e.g.% likelihood of gains or losses). It demonstrates that people think in terms of expected utility relative to a reference point (e.g. current wealth) rather than absolute outcomes.'} />
              <Box display="flex" justifyContent="center">
              <Box border={1} {...defaultProps}>
              <Grid container>
                <RadioButtonsGroup radioOption1={'33% chance of winning INR 10000'} radioOption2={'67% chance of winning INR 10000'} onChange={this.onChange1} />
                <RadioButtonsGroup radioOption1={'80% chance of winning INR 15000'} radioOption2={'20% chance of winning INR 15000'} onChange={this.onChange2}/>
                <RadioButtonsGroup radioOption1={'0.2% chance of winning INR 50000'} radioOption2={'99.8% chance of winning INR 50000'} onChange={this.onChange3}/>
                <RadioButtonsGroup radioOption1={'50% chance of winning a three weeks trip to england, france and italy'} radioOption2={'50% chance of winning a one week trip to France'} onChange={this.onChange4} />
                <RadioButtonsGroup radioOption1={'10% chance of winning a one week trip to england'} radioOption2={'90% chance of winning two week trip to england and germany'}  onChange={this.onChange5}/>
              </Grid>
              </Box>
              </Box>
              <NextButton />
            </div> 
        );   
    }
}