import React from 'react';
import {Grid,Box} from '@material-ui/core';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import SimplePaper from '../Components/Description';
import RadioSection from '../Components/RadioSection';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


 class Section2 extends React.Component {
    
    state={
        radio:[],
        risk:[
            {character:'RiskSeeker', value:0},
            {character:'RiskAverse', value:0},
        ]
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    onChange1=(value)=>{
        let newRadio = this.state.radio.slice();
            newRadio[0] = value;
        this.setState({radio: newRadio});
    }
    onChange2=(value)=>{
        let newRadio = this.state.radio.slice();
            newRadio[1] = value;
        this.setState({radio: newRadio});
    }
    onChange3=(value)=>{
        let newRadio = this.state.radio.slice();
        newRadio[2] = value;
        this.setState({radio: newRadio});
    }
    onChange4=(value)=>{
        let newRadio = this.state.radio.slice();
        newRadio[3] = value;
        this.setState({radio: newRadio});
    }
    onChange5=(value)=>{
        let newRadio = this.state.radio.slice();
        newRadio[4] = value;
        this.setState({radio: newRadio});
    }

    handleClick=()=>{
        let newRadio = this.state.radio.slice();
        let seeker=0;
        let averse=0;
        newRadio.map(item=>{
            if(item ==='option1')
                seeker+=10;
            if(item==='option2')
                averse+=5;
        });
        let newRisk= this.state.risk.slice();
        newRisk[0].value =seeker;
        newRisk[1].value=averse;
        this.setState({
            risk:newRisk
        });
        this.props.addRisk(this.state.risk);
        this.props.history.push("/Section3");
    }

    render(){
        return (
            <div>
            <ButtonAppBar AppBarText={'PROSPECT THEORY'}/>
              <SimplePaper Description={'PROSPECT THEORY IS A BEHAVIORAL MODEL THAT SHOWS HOW PEOPLE DECIDE BETWEEN ALTERNATIVES THAT INVOLVE RISK AND UNCERTAINTY(E.G.% LIKELIHOOD OF GAINS OR LOSSES). IT DEMONSTRATES THAT PEOPLE THINK IN TERMS OF EXPECTED UTILITY RELATIVE TO A REFERENCE POINT (E.G. CURRENT WEALTH) RATHER THAN ABSOLUTE OUTCOMES.'} />
              <RadioSection  onChange1={this.onChange1} onChange2={this.onChange2} onChange3={this.onChange3} onChange4={this.onChange4} onChange5={this.onChange5}  />  
              <NextButton onclick={this.handleClick} />
            </div> 
        );   
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        addRisk: (risk)=>{dispatch({type:'ADD_RISK',risk: risk})}
    }
}
export default connect(null,mapDispatchtoProps)(withRouter(Section2));