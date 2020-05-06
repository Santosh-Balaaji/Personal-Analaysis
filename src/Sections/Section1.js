import React from 'react';
import {Grid,Box,Paper, Divider} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import SimplePaper from '../Components/Description';
import {withRouter} from 'react-router-dom';
import Dividers from '../Components/Divider';
import Footer from '../Components/Footer';
import CustomizedRadios from '../Components/RadioTabs';
import { connect } from 'react-redux';


class Section1 extends React.Component {
      state={
          radio:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          ocean : [
            {
            state: 'OPENNES',
            positive:0,
            negative:0
            
          }, {
            state: 'CONSCIENTIOUSNESS',
            positive:0,
            negative:0
          }, {
            state: 'EXTRAVERSION',
            positive:0,
            negative:0
          }, {
            state: 'AGREEABLENESS',
            positive:0,
            negative:0
          },
          {
            state: 'NEUROTICISM',
            positive:0,
            negative:0
          }]
      }
    mapToValue(value)
    {
    if(value=="Strongly Agree")
        return 25;
      if(value=="Agree")
        return 20;
      if(value=="Neutral")
        return 15;
      if(value=="Disagree")
        return 10;
      if(value=="Strongly Disagree")
        return 5;
    }
    onChange1=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[0] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[0]);
        });
    }
    onChange2=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[1] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[1]);
        });
    }
    onChange3=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[2] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[2]);
        });
    }
    onChange4=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[3] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[3]);
        });
    }
    onChange5=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[4] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[4]);
        });
    }
    onChange6=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[5] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[5]);
        });
    }
    onChange7=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[6] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[6]);
        });
    }
    onChange8=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[7] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[7]);
        });
    }
    onChange9=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[8] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[8]);
        });
    }
    onChange10=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[9] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[9]);
        });
    }
    onChange11=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[10] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[10]);
        });
    }
    onChange12=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[11] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[11]);
        });
    }
    onChange13=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[12] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[12]);
        });
    }
    onChange14=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[13] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[13]);
        });
    }
    onChange15=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[14] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[14]);
        });
    }
    onChange16=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[15] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[15]);
        });
    }
    onChange17=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[16] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[16]);
        });
    }
    onChange18=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[17] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[17]);
        });
    }
    onChange19=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[18] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[18]);
        });
    }
    onChange20=(event,value)=>{
        let newRadio= this.state.radio.slice();
        let val = this.mapToValue(event.target.value);
        newRadio[19] = val;
        this.setState({radio: newRadio},function(){
            console.log(this.state.radio[19]);
        });
    }

    handleClick=()=>{
        this.setState({
            
        });
        this.props.addOcean(this.state.radio);
        this.props.history.push("/Section2");
    }
    
    
    
    render(){
        
        
      const defaultProps = {
        bgcolor: '#f5f5f5',
        m: 2,   
        style: { width: '80%', height: '60%' },
        borderColor: 'grey.500',
      };
      
    return (
        <div >
          <ButtonAppBar AppBarText={'BIG FIVE FACTOR THEORY'}/>
        <SimplePaper Description={'THE BIG FIVE PERSONALITY TRAITS ARE THE BEST ACCEPTED AND MOST COMMONLY USED MODEL OF PERSONALITY IN ACADEMIC PSYCHOLOGY.THE RESULTS OF THIS TEST ARE NOT PSYCHOLOGICAL OR PSYCHIATRIC ADVICE OF ANY KIND AND COME WITH NO GUARANTEE OF ACCURACY OR FITNESS FOR A PARTICULAR PURPOSE TO EXPLORE YOUR PERSONALITY WITH THE HIGHLY RESPECTED BIG FIVE FACTOR MODEL. YOU WILL SEE HOW YOU WILL STACK UP THE FIVE DIMENSIONS : OCEAN'} />
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
        <NextButton onclick={this.handleClick}/>

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