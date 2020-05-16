import React from 'react';
import GridComponent from '../GridComponent';
//import PieChart from '../DevExtremeCharts/PieChart';
import PieChart from '../ChartComponents/PieChart'; 
import {connect} from 'react-redux';
import GrdiSection2 from '../Section2Grid';
import doughNut from '../DevExtremeCharts/Doughnut';
import Doughnut from '../DevExtremeCharts/Doughnut';

class  Tab2 extends React.Component{
constructor(props){
    super(props);
    this.state = {
        data: this.props.risk,
        
      }
}
 computeRisk=(data)=>{
     let newResult=[];
     if(data[0].value<=data[1].value){
        newResult[0]=data[1].character.slice(4);
        newResult[1]="If you are a risk-averse investor, you will find yourself immediately leaning toward the guaranteed return. Depending on just how risk-averse you are, you may immediately accept it without concerning yourself with the amount. After all, some money sure beats no money. You do not perceive this as a “nothing to lose” scenario, because the guaranteed return is technically yours by right should you accept it.";
     }
     else{
        newResult[0]=data[0].character.slice(4);
        newResult[1]="If you are a risk seeker, you may naturally find yourself drawn to situations where you could win or lose. The idea of making it big appeals to you, even though you might also lose big.";
     }
     return newResult;
 }
    render(){
        var data = this.state.data.slice();
        var result=this.computeRisk(data);
        var riskStatus="Risk "+result[0];


    return(    
    <div >
        
        <div >
        <Doughnut />
                </div>
                <div className="result-div" style={{marginTop:'2%',fontFamily:'unset',fontSize:'1.2em'}}>
                As per your responses, you seem to be a Risk {result[0]} Person 
        </div>
        <div>
            <GrdiSection2 header={riskStatus} body={result[1]} />
        </div>
        <div className="bottom-div">While looking at your responses, you would have probably realized that these are not truly black-and-white precision.
            </div>
       
    </div>
)
}
}
const mapStateToProps=(state)=>{
    return{
        risk:state.risk
    }
}
export default connect(mapStateToProps)(Tab2)