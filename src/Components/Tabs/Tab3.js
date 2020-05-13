import React from 'react';
import GridComponent from '../GridSection3';
import BarChart from '../DevExtremeCharts/BarChart';
import {connect} from 'react-redux';
import '../../Sections/styles.scss';

 class Tab3 extends React.Component{
constructor(props)
{
    super(props);
}

computeResult(data){
let temp_array=[];
let max=0;
let count=0;
var result="";
data.forEach(e => {
    if(e.value >=max){
        max= e.value;
    }
});

data.forEach(i=>{
    if(i.value== max)
    {
        temp_array[count]=i.character;
        count++;
    }

});

if(count==1)
    result="As per your response, you seem to have high degree of <b>"+temp_array[0]+"</b>";
if(count==2)
    result="As per your response, you seem to have high degree of "+temp_array[0]+" and "+temp_array[1];
if(count==3)
    result="As per your response, you seem to have high degree of "+temp_array[0]+", "+temp_array[1]+" and "+temp_array[2];
if(count==4)
    result="As per your response, you seem to have high degree of "+temp_array[0]+", "+temp_array[1]+", "+temp_array[2]+" and "+temp_array[3];
if(count==5)
    result="As per your response, you seem to have high degree of "+temp_array[0]+", "+temp_array[1]+", "+temp_array[2]+", "+temp_array[3]+" and "+temp_array[4];
if(count==6)
    result="As per your response, you seem to have high degree of "+temp_array[0]+", "+temp_array[1]+", "+temp_array[2]+", "+temp_array[3]+", "+temp_array[4]+" and "+temp_array[5];


return result

}
    render(){
    const {data} =this.props;
    var result= this.computeResult(data);
return(    
    <div >

        <div >
        <BarChart />
        <div className="result-div">
            {result}
        </div>
        <GridComponent />

        </div>
    </div>
)
}
}

const mapStateToProps=(state)=>{
    return{
        data: state.data
    }
}
export default connect(mapStateToProps)(Tab3)
