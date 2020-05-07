import React from 'react';
import Barchart from '../Components/ChartComponents/Barchart';
import DoubleBarChart from '../Components/ChartComponents/DoubleBarChart';
import PieChart from '../Components/ChartComponents/PieChart';
export default class Section4 extends React.Component{

    render()
    {
        return(
            <div>
            <Barchart />
            <DoubleBarChart />
            <PieChart />
            </div>
        );

    }
}