import React from 'react';
import Barchart from '../Components/ChartComponents/Barchart';
import DoubleBarChart from '../Components/ChartComponents/DoubleBarChart';
import PieChart from '../Components/ChartComponents/PieChart';
import AppBar from '../Components/AppBar';
import Tabs from './Tabs';

export default class Section4 extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render()
    {
        return(
            <div>
                <AppBar AppBarText={'ANALYSIS REPORT'}/>
                <div style={{padding:'40px',textAlign:'left'}}>Following displays the results analyzed from your selected options that are classified into three sections</div>
                <Tabs />
            

            </div>
        );

    }
}