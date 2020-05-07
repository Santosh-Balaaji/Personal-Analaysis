import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Tooltip,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import {connect} from 'react-redux';
import { EventTracker } from '@devexpress/dx-react-chart';

const data = [
    { character: 'RiskSeeker', value: 25 },
    { character: 'RiskAverse', value: 30},
    
  ];
class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.risk
    };
  }

  render() {
      console.log(this.props);
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="value"
            argumentField="character"
          />
         <Title text="Risk Analysis" />
          <EventTracker />
          <Tooltip />
          <Legend />

        </Chart>
      </Paper>
    );
  }
}


const mapStateToProps=(state)=>{
    return{
        risk:state.risk
    }
}
export default connect(mapStateToProps)(PieChart)