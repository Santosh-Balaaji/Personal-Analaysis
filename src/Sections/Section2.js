import React from 'react';
import {Grid,Box} from '@material-ui/core';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import SimplePaper from '../Components/Description';
import Layout from '../Components/Radio';
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
            <div>
            <ButtonAppBar AppBarText={'PROSPECT THEORY'}/>
              <SimplePaper Description={'PROSPECT THEORY IS A BEHAVIORAL MODEL THAT SHOWS HOW PEOPLE DECIDE BETWEEN ALTERNATIVES THAT INVOLVE RISK AND UNCERTAINTY(E.G.% LIKELIHOOD OF GAINS OR LOSSES). IT DEMONSTRATES THAT PEOPLE THINK IN TERMS OF EXPECTED UTILITY RELATIVE TO A REFERENCE POINT (E.G. CURRENT WEALTH) RATHER THAN ABSOLUTE OUTCOMES.'} />
              <Layout />  
              <NextButton onclick={this.handleClick} />
            </div> 
        );   
    }
}

export default withRouter(Section2);