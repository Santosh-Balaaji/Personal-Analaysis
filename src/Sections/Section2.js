import React from 'react';
import {Grid,Box,Paper} from '@material-ui/core';
import Sliders from '../Components/Sliders';
import NextButton from '../Components/NextButton';
import ButtonAppBar from '../Components/AppBar';   
import SimplePaper from '../Components/Description';
export default class Section1 extends React.Component {
    render(){
        return (
            <div>
                <ButtonAppBar AppBarText={'BIG FIVE FACTOR THEORY'}/>
              <SimplePaper Description={'Prospect theory is a behavioral model that shows how people decide between alternatives that involve risk and uncertainty(e.g.% likelihood of gains or losses). It demonstrates that people think in terms of expected utility relative to a reference point (e.g. current wealth) rather than absolute outcomes.'} />
              <Box display="flex" justifyContent="center">
              <Box border={1} {...defaultProps}>
              <Grid container>
              </Grid>
              </Box>
              </Box>
            
            </div> 
        );   
    }
}