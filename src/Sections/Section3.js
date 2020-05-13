import React from 'react';
import {Grid,Box,Paper} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import { connect } from 'react-redux';


class Section3 extends React.Component {
    
    state ={
        radio:[0,0,0,0,0,0],
        count:[],
        button_disable: true,
        data : [
          { character: 'LOSS AVERSION', value: 0 },
          { character: 'REGRET AVOIDANCE', value: 0 },
          { character: 'MENTAL ACCOUNTING', value: 0 },
          { character: 'OVER CONFIDENCE', value: 0 },
          { character: 'ANCHORING', value: 0 },
          {character:'HERDING', value: 0},
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
    handleClick=()=>{
      let newData= this.state.data.slice();
      newData[0].value=this.state.radio[0];
      newData[1].value=this.state.radio[1];
      newData[2].value=this.state.radio[2];
      newData[3].value=this.state.radio[3];
      newData[4].value=this.state.radio[4];
      newData[5].value=this.state.radio[5];
      this.setState({
        data:newData
      });
      this.props.addData(this.state.data);
      this.props.history.push("/Section4");
  }
  componentDidMount(){
    window.scrollTo(0, 0)
}
mapToValue(value)
{
if(value==="Strongly Agree")
    return 25;
  if(value==="Agree")
    return 20;
  if(value==="Neutral")
    return 15;
  if(value==="Disagree")
    return 10;
  if(value==="Strongly Disagree")
    return 5;
}
    onChange1=(event,value)=>{
      let newRadio= this.state.radio.slice();
      let val = this.mapToValue(value);
        newRadio[0]=val;
        let newCount=this.state.count.slice();
        newCount[0] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===6)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange2=(event,value)=>{
      let newRadio= this.state.radio.slice();
      let val = this.mapToValue(value);
      newRadio[1]=val;
      let newCount=this.state.count.slice();
      newCount[1] =1;
      let sumCount=this.computeCount(newCount);        
      this.setState({radio: newRadio},function(){
          this.setState({count:newCount},function(){
              if(sumCount===6)
                   this.setState({button_disable:false});
          });
      });
    }
    onChange3=(event,value)=>{
      let newRadio= this.state.radio.slice();
      let val = this.mapToValue(value);
      newRadio[2]=val;
      let newCount=this.state.count.slice();
      newCount[2] =1;
      let sumCount=this.computeCount(newCount);        
      this.setState({radio: newRadio},function(){
          this.setState({count:newCount},function(){
              if(sumCount===6)
                   this.setState({button_disable:false});
          });
      });
    }
    onChange4=(event,value)=>{
      let newRadio= this.state.radio.slice();
      let val = this.mapToValue(value);
      newRadio[3]=val;
      let newCount=this.state.count.slice();
      newCount[3] =1;
      let sumCount=this.computeCount(newCount);        
      this.setState({radio: newRadio},function(){
          this.setState({count:newCount},function(){
              if(sumCount===6)
                   this.setState({button_disable:false});
          });
      });
    }
    onChange5=(event,value)=>{
      let newRadio= this.state.radio.slice();
      let val = this.mapToValue(value);
      newRadio[4]=val;
      let newCount=this.state.count.slice();
      newCount[4] =1;
      let sumCount=this.computeCount(newCount);        
      this.setState({radio: newRadio},function(){
          this.setState({count:newCount},function(){
              if(sumCount===6)
                   this.setState({button_disable:false});
          });
      });
    }
    onChange6=(event,value)=>{
      let newRadio= this.state.radio.slice();
      let val = this.mapToValue(value);
      newRadio[5]=val;
      let newCount=this.state.count.slice();
      newCount[5] =1;
      let sumCount=this.computeCount(newCount);        
      this.setState({radio: newRadio},function(){
          this.setState({count:newCount},function(){
              if(sumCount===6)
                   this.setState({button_disable:false});
          });
      });
    }
    render(){
        
        return (
          <div>
                <ButtonAppBar AppBarText={'BEHAVOIRAL BIASES'}/>
            <Sliders sliderTypo={'1. AFTER A PRIOR LOSS, I BECOME MORE RISK AVERSE'} onChange={this.onChange1}  />
            <Sliders sliderTypo={'2. I AVOID SELLING INVESTMENTS THAT HAVE DECREASE IN VALUE ANS READILY SELL INVESTMENTS THAT HAVE AN INCREASE IN VALUE'} onChange={this.onChange2}   />
            <Sliders sliderTypo={'3. I TEND TO TREAT EACH ELEMENT OF MY INVESTMENT PORTFOLIO SEPARATELY'} onChange={this.onChange3}  />
            <Sliders sliderTypo={'4. I BELIEVE THAT MY SKILLS AND KNOWLEDGE ARE ADEQUATE THAT CAN HELP ME TO OUT PERFORM THE MARKET'} onChange={this.onChange4}  />
            <Sliders sliderTypo={'5. I FORECAST THE CHANGES IN PRICES IN THE FUTURE PERIODS ON THE RECENT PRICES'}  onChange={this.onChange5}  />
            <Sliders sliderTypo={'6. I USUALLY REACT QUICKLY TO THE CHANGES OF THE OTHER INVESTORS DECISIONS AND FOLLOW THEIR REACTIONS IN THE INVESTMENT MARKET'}  onChange={this.onChange6}  />
            <NextButton onclick={this.handleClick} disable={this.state.button_disable} />
           </div>   
          );
            }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    addData: (data) =>{dispatch({type:'ALTER_DATA',data:data})}
  }
}

export default connect(null,mapDispatchToProps)(Section3)