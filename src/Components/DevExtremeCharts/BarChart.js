import React from 'react';

import { Chart, Series,Legend } from 'devextreme-react/chart';
import {connect} from 'react-redux';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    const { data: chartData } = this.props;
    
    return (
      <Chart id="chart" dataSource={chartData} title="Behavioral Biases Report" rotated>
        <Series
          valueField="value"
          argumentField="character"
          name="Character"
          type="bar"
          color="#f5564a"
           />
           <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
      </Chart>
    );
  }
}
const mapStateToProps=(state)=>{
    return{
        data: state.data
    }
}

export default connect(mapStateToProps)(BarChart)