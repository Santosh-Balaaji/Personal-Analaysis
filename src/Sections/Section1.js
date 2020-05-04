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


class Section1 extends React.Component {
      state={
          slider1:"",
          slider2:"",
          slider3:"",
          slider4:"",
          slider5:"",
          slider6:"",
          slider7:"",
          slider8:"",
          slider9:"",
          slider10:"",
          slider11:"",
          slider12:"",
          slider13:"",
          slider14:"",
          slider15:"",
          slider16:"",
          slider17:"",
          slider18:"",
          slider19:"",
          slider20:"",
          

      }
      
    onChange1=(event,value)=>{
        this.setState({slider1: event.target.value},function(){
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
    onChange7=(event,value)=>{
        this.setState({slider7: value},function(){
            console.log(this.state.slider7);
        });
    }
    onChange8=(event,value)=>{
        this.setState({slider8: value},function(){
            console.log(this.state.slider8);
        });
    }
    onChange9=(event,value)=>{
        this.setState({slider9: value},function(){
            console.log(this.state.slider9);
        });
    }
    onChange10=(event,value)=>{
        this.setState({slider10: value},function(){
            console.log(this.state.slider10);
        });
    }
    onChange11=(event,value)=>{
        this.setState({slider11: value},function(){
            console.log(this.state.slider11);
        });
    }
    onChange12=(event,value)=>{
        this.setState({slider12: value},function(){
            console.log(this.state.slider12);
        });
    }
    onChange13=(event,value)=>{
        this.setState({slider13: value},function(){
            console.log(this.state.slider13);
        });
    }
    onChange14=(event,value)=>{
        this.setState({slider14: value},function(){
            console.log(this.state.slider14);
        });
    }
    onChange15=(event,value)=>{
        this.setState({slider15: value},function(){
            console.log(this.state.slider15);
        });
    }
    onChange16=(event,value)=>{
        this.setState({slider16: value},function(){
            console.log(this.state.slider16);
        });
    }
    onChange17=(event,value)=>{
        this.setState({slider17: value},function(){
            console.log(this.state.slider17);
        });
    }
    onChange18=(event,value)=>{
        this.setState({slider18: value},function(){
            console.log(this.state.slider18);
        });
    }
    onChange19=(event,value)=>{
        this.setState({slider19: value},function(){
            console.log(this.state.slider19);
        });
    }
    onChange20=(event,value)=>{
        this.setState({slider20: value},function(){
            console.log(this.state.slider20);
        });
    }

    handleClick=()=>{
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

  export default withRouter(Section1);