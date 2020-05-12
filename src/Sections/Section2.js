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
        ],
        count:[],
        button_disable: true,
    }
    computeCount(x){
        let sum=0;
        x.forEach(e => {
            if(e!=undefined)
                {
                sum+=e;
                }
        });
        return sum;
    }
    
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    onChange1=(value)=>{
        let newRadio = this.state.radio.slice();
            newRadio[0] = value;
        let newCount=this.state.count.slice();
        newCount[0] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===5)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange2=(value)=>{

        let newRadio = this.state.radio.slice();
            newRadio[1] = value;
            let newCount=this.state.count.slice();
            newCount[1] =1;
            let sumCount=this.computeCount(newCount);        
            this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===5)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange3=(value)=>{
        let newRadio = this.state.radio.slice();
        newRadio[2] = value;
        let newCount=this.state.count.slice();
        newCount[2] =1;
        let sumCount=this.computeCount(newCount);        

        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===5)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange4=(value)=>{
        let newRadio = this.state.radio.slice();
        newRadio[3] = value;
        let newCount=this.state.count.slice();
        newCount[3] =1;
        let sumCount=this.computeCount(newCount);        

        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===5)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange5=(value)=>{
        let newRadio = this.state.radio.slice();
        newRadio[4] = value;
        let newCount=this.state.count.slice();
        newCount[4] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===5)
                     this.setState({button_disable:false});
            });
        });
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
              <RadioSection  onChange1={this.onChange1} onChange2={this.onChange2} onChange3={this.onChange3} onChange4={this.onChange4} onChange5={this.onChange5}  />  
             
              <NextButton  onclick={this.handleClick} disable={this.state.button_disable}  />
              
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