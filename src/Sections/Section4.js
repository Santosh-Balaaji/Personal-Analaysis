import React from 'react';
import Barchart from '../Components/ChartComponents/Barchart';
import DoubleBarChart from '../Components/ChartComponents/DoubleBarChart';
import PieChart from '../Components/ChartComponents/PieChart';
import AppBar from '../Components/AppBar';
export default class Section4 extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render()
    {
        return(
            <div>
                <AppBar AppBarText={'ANALYSIS REPORT'}/>
            <div><DoubleBarChart /></div>
            <div><PieChart /></div>
            <div><Barchart /></div>

            </div>
        );

    }
}