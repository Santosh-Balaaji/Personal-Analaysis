import React from 'react';
import { $CombinedState } from 'redux';
import background from '../Images/woman.jpg';
import { blue } from '@material-ui/core/colors';
import {Image} from 'react-bootstrap';
import { makeStyles,Grid } from "@material-ui/core";  
 import "./styles.scss"; 
 import AutoGrid from '../Components/GridComponent';
import NextButton from '../Components/NextButton'; 
import {withRouter} from 'react-router-dom';

class Index extends React.Component{
   
    constructor(props)
    {
        super(props);
    }
   
   
    handleClick=()=>{
        this.props.history.push("/Section1");
    }
    render(){
        
        
       
        return(
            <div>
                <div className="main" >
                    <div className="overlay" ></div>
                    <Image src={background} className="image"/>
                    <div className="slider-pos">
                     <h1 className="slider-text" style={{top:'-3%'}}>Personality Analysis</h1>
                     </div>
                    </div>
                    <h1>Hello World</h1>
                    <NextButton onclick={this.handleClick} />
                
                </div>
        );
    }
}

export default withRouter(Index)