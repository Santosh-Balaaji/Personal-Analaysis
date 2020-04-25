import React from 'react';
import {Grid,Box} from '@material-ui/core';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import SimplePaper from '../Components/Description';
import RadioButtonsGroup from '../Components/Radio';
import {withRouter} from 'react-router-dom';



 class Section2 extends React.Component {
    
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

    handleClick=()=>{
        this.props.history.push("/Section3");
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
            <ButtonAppBar AppBarText={'PROSPECT THEORY'}/>
              <SimplePaper Description={'PROSPECT THEORY IS A BEHAVIORAL MODEL THAT SHOWS HOW PEOPLE DECIDE BETWEEN ALTERNATIVES THAT INVOLVE RISK AND UNCERTAINTY(E.G.% LIKELIHOOD OF GAINS OR LOSSES). IT DEMONSTRATES THAT PEOPLE THINK IN TERMS OF EXPECTED UTILITY RELATIVE TO A REFERENCE POINT (E.G. CURRENT WEALTH) RATHER THAN ABSOLUTE OUTCOMES.'} />
              <Grid container>
                <RadioButtonsGroup radioOption1={'33% chance of winning INR 10000'} radioOption2={'67% chance of winning INR 10000'} onChange={this.onChange1} />
                <RadioButtonsGroup radioOption1={'80% chance of winning INR 15000'} radioOption2={'20% chance of winning INR 15000'} onChange={this.onChange2}/>
                <RadioButtonsGroup radioOption1={'0.2% chance of winning INR 50000'} radioOption2={'99.8% chance of winning INR 50000'} onChange={this.onChange3}/>
                <RadioButtonsGroup radioOption1={'50% chance of winning a three weeks trip to england, france and italy'} radioOption2={'50% chance of winning a one week trip to France'} onChange={this.onChange4} />
                <RadioButtonsGroup radioOption1={'10% chance of winning a one week trip to england'} radioOption2={'90% chance of winning two week trip to england and germany'}  onChange={this.onChange5}/>
              </Grid>
              <NextButton onclick={this.handleClick} />
            </div> 
        );   
    }
}

export default withRouter(Section2);