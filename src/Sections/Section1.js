import React from 'react';
import {Grid,Box, Typography} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import ButtonAppBar from '../Components/AppBar';   
  export default class Section1 extends React.Component {
      state={
          slider1:1,
          slider2:1,
          slider3:1,
          slider4:1,
          slider5:1,
          slider6:1,
          slider7:1,
          slider8:1,
          slider9:1,
          slider10:1,
          slider11:1,
          slider12:1,
          slider13:1,
          slider14:1,
          slider15:1,
          slider16:1,
          slider17:1,
          slider18:1,
          slider19:1,
          slider20:1,

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

    
    render(){
        
        
      const defaultProps = {
        bgcolor: 'background.paper',
        m: 6,   
        style: { width: '70rem', height: '204rem' },
        borderColor: 'grey.500',
      };
      
      let theme = createMuiTheme();
      theme = responsiveFontSizes(theme);
      
    return (
      <div>
          <ButtonAppBar AppBarText={'BIG FIVE FACTOR THEORY'}/>
        <Box display="flex" justifyContent="center">
        <Box border={1} {...defaultProps}>
        <Grid container>
      <Sliders sliderTypo={'1. HAVE FEW ARTISTIC SKILLS'} onChange={this.onChange1} />
      <Sliders sliderTypo={'2. INSISTS UNTIL COMPLETING THE WORK IN AN ORGANIZED MANNER'} onChange={this.onChange2} />
      <Sliders sliderTypo={'3. SOCIALLY OUTGOING'} onChange={this.onChange3} />
      <Sliders sliderTypo={'4. USUALLY TRUSTS PEOPLE'} onChange={this.onChange4}/>
      <Sliders sliderTypo={'5. RELAXED AND CONTROLS STRESS'}  onChange={this.onChange5}/>
      <Sliders sliderTypo={'6. I ENJOY HEARING NEW IDEAS FROM OTHERS'}  onChange={this.onChange6}/>
      <Sliders sliderTypo={'7. I MAKE PLANS AND STICK TO THEM'}  onChange={this.onChange7}/>
      <Sliders sliderTypo={'8. I AM A LIFE OF PARTY'}  onChange={this.onChange8}/>
      <Sliders sliderTypo={'9. I TAKE CARE OF OTHER PEOPLE BEFORE EMOTIONS TAKING CARE OF MYSELF'}  onChange={this.onChange9}/>
      <Sliders sliderTypo={'10. I LOVE TO STAY IN PEACE'}  onChange={this.onChange10}/>
      <Sliders sliderTypo={'11. HAVE A FERTILE IMAGINATION'}  onChange={this.onChange11}/>
      <Sliders sliderTypo={'12. DOES THE WORK WITHOUT ANY PLANS'}  onChange={this.onChange12}/>
      <Sliders sliderTypo={'13. RESERVED'}  onChange={this.onChange13}/>
      <Sliders sliderTypo={'14. TENDS TO BE CRITICAL TOWARDS OTHERS'}  onChange={this.onChange14}/>
      <Sliders sliderTypo={'15. GETS NERVOUS EASILY'}  onChange={this.onChange15}/>
      <Sliders sliderTypo={'16. I AM NOT INTERESTED IN ABSTRACT IDEAS'}  onChange={this.onChange16}/>
      <Sliders sliderTypo={'17. I DON’T GET MY CHORES DONE RIGHT AWAY'}  onChange={this.onChange17}/>
      <Sliders sliderTypo={'18. I HAVE A LITTLE TO SAY'}  onChange={this.onChange18}/>
      <Sliders sliderTypo={'19. I AM NOT REALLY INTERESTED IN OTHERS'}  onChange={this.onChange19}/>
      <Sliders sliderTypo={'20. I AM OFTEN TROUBLED BY NEGATIVE THOUGHTS'}  onChange={this.onChange20}/>

        </Grid>
        </Box>
        </Box>
        <NextButton />
        
      </div>
    );
      }
  }
  