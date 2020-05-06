import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import {connect} from 'react-redux';

import { EventTracker } from '@devexpress/dx-react-chart';



 class Barchart extends React.PureComponent {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    const { data: chartData } = this.props;
    console.log(this.props);

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="value"
            argumentField="character"
          />
          <Title
            text="Behavioral Biases Report"
          />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        data: state.data
    }
}

export default connect(mapStateToProps)(Barchart) 