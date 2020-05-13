import React from 'react';
import {Grid} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


class Section1 extends React.Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
      state={
          radio:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          ocean : [
            {
            state: 'OPEN',
            positive:0,
            negative:0
            
          }, {
            state: 'CONSCIEN',
            positive:0,
            negative:0
          }, {
            state: 'EXTRA',
            positive:0,
            negative:0
          }, {
            state: 'AGREE',
            positive:0,
            negative:0
          },
          {
            state: 'NEURO',
            positive:0,
            negative:0
          }],
          count:[],
          button_disable: false,
      }

      computeCount(x){
        let sum=0;
        x.forEach(e => {
            if(e!==undefined)
                {
                sum+=e;
                }
        });
        return sum;
    }
    handleClick=()=>{
        let newOcean = this.state.ocean.slice();
        newOcean[0].positive = this.state.radio[0]+this.state.radio[5];
        newOcean[0].negative = this.state.radio[10]+this.state.radio[15]; 
        
        newOcean[1].positive = this.state.radio[1]+this.state.radio[6];
        newOcean[1].negative = this.state.radio[11]+this.state.radio[16];
        
        newOcean[2].positive = this.state.radio[2]+this.state.radio[7];
        newOcean[2].negative = this.state.radio[12]+this.state.radio[17];
        
        newOcean[3].positive = this.state.radio[3]+this.state.radio[8];
        newOcean[3].negative = this.state.radio[13]+this.state.radio[18];
        
        newOcean[4].positive = this.state.radio[4]+this.state.radio[9];
        newOcean[4].negative = this.state.radio[14]+this.state.radio[19];
        this.setState({
            
            ocean:newOcean
        });
        this.props.addOcean(this.state.ocean);
        this.props.history.push("/Section2");
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
        let val = this.mapToValue(event.target.value);
        newRadio[0] = val;

         let newCount=this.state.count.slice();
        newCount[0] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange2=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[1] = val;
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
    onChange3=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[2] = val;
        let newCount=this.state.count.slice();
        newCount[2] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange4=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[3] = val;
        let newCount=this.state.count.slice();
        newCount[3] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange5=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[4] = val;
        let newCount=this.state.count.slice();
        newCount[4] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange6=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[5] = val;
        let newCount=this.state.count.slice();
        newCount[5] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange7=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[6] = val;
        let newCount=this.state.count.slice();
        newCount[6] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange8=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[7] = val;
        let newCount=this.state.count.slice();
        newCount[7] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange9=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[8] = val;
        let newCount=this.state.count.slice();
        newCount[8] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange10=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[9] = val;
        let newCount=this.state.count.slice();
        newCount[9] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange11=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[10] = val;
        let newCount=this.state.count.slice();
        newCount[10] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange12=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[11] = val;
        let newCount=this.state.count.slice();
        newCount[11] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange13=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[12] = val;
        let newCount=this.state.count.slice();
        newCount[12] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange14=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[13] = val;
        let newCount=this.state.count.slice();
        newCount[13] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange15=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[14] = val;
        let newCount=this.state.count.slice();
        newCount[14] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange16=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[15] = val;
        let newCount=this.state.count.slice();
        newCount[15] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange17=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[16] = val;
        let newCount=this.state.count.slice();
        newCount[16] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange18=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[17] = val;
        let newCount=this.state.count.slice();
        newCount[17] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange19=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[18] = val;
        let newCount=this.state.count.slice();
        newCount[18] =1;
        let sumCount=this.computeCount(newCount);        
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    onChange20=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[19] = val;
        let newCount=this.state.count.slice();
        newCount[19] =1;
        let sumCount=this.computeCount(newCount);
        this.setState({radio: newRadio},function(){
            this.setState({count:newCount},function(){
                if(sumCount===20)
                     this.setState({button_disable:false});
            });
        });
    }
    render(){
    return (
        <div >
          <ButtonAppBar AppBarText={'BIG FIVE FACTOR THEORY'}/>
        <Grid container>
      <Sliders sliderTypo={'1. HAVE FEW ARTISTIC SKILLS'} onChange={this.onChange1}  />
      <Sliders sliderTypo={'2. INSISTS UNTIL COMPLETING THE WORK IN AN ORGANIZED MANNER'} onChange={this.onChange2}  />
      <Sliders sliderTypo={'3. SOCIALLY OUTGOING'} onChange={this.onChange3}  />
      <Sliders sliderTypo={'4. USUALLY TRUSTS PEOPLE'} onChange={this.onChange4} />
      <Sliders sliderTypo={'5. RELAXED AND CONTROLS STRESS'}  onChange={this.onChange5} />
      <Sliders sliderTypo={'6. I ENJOY HEARING NEW IDEAS FROM OTHERS'}  onChange={this.onChange6} />
      <Sliders sliderTypo={'7. I MAKE PLANS AND STICK TO THEM'}  onChange={this.onChange7} />
      <Sliders sliderTypo={'8. I AM A LIFE OF PARTY'}  onChange={this.onChange8} />
      <Sliders sliderTypo={'9. I TAKE CARE OF OTHER PEOPLE BEFORE EMOTIONS TAKING CARE OF MYSELF'}  onChange={this.onChange9} />
      <Sliders sliderTypo={'10. I LOVE TO STAY IN PEACE'}  onChange={this.onChange10} />
      <Sliders sliderTypo={'11. HAVE A FERTILE IMAGINATION'}  onChange={this.onChange11} />
      <Sliders sliderTypo={'12. DOES THE WORK WITHOUT ANY PLANS'}  onChange={this.onChange12} />
      <Sliders sliderTypo={'13. RESERVED'}  onChange={this.onChange13} />
      <Sliders sliderTypo={'14. TENDS TO BE CRITICAL TOWARDS OTHERS'}  onChange={this.onChange14} />
      <Sliders sliderTypo={'15. GETS NERVOUS EASILY'}  onChange={this.onChange15} />
      <Sliders sliderTypo={'16. I AM NOT INTERESTED IN ABSTRACT IDEAS'}  onChange={this.onChange16} />
      <Sliders sliderTypo={'17. I DON’T GET MY CHORES DONE RIGHT AWAY'}  onChange={this.onChange17} />
      <Sliders sliderTypo={'18. I HAVE A LITTLE TO SAY'}  onChange={this.onChange18} />
      <Sliders sliderTypo={'19. I AM NOT REALLY INTERESTED IN OTHERS'}  onChange={this.onChange19} />
      <Sliders sliderTypo={'20. I AM OFTEN TROUBLED BY NEGATIVE THOUGHTS'}  onChange={this.onChange20} />
        </Grid>
        <NextButton onclick={this.handleClick} disable={this.state.button_disable}/>
      </div>
    );
      }
  }

  const mapDispatchToProps =(dispatch) =>{
    return{
      addOcean: (oceanVal) =>{dispatch({type:'ALTER_OCEAN',oceanVal:oceanVal})}
    }
  }

  export default connect(null,mapDispatchToProps)(withRouter(Section1));