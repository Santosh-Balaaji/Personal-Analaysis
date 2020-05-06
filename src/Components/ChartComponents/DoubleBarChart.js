import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
  Title

} from '@devexpress/dx-react-chart-material-ui';


import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import {connect} from 'react-redux';


const ocean = [{
  state: 'OPENNES',
  positive:10,
  negative:25
  
}, {
  state: 'CONSCIENTIOUSNESS',
  positive:5,
  negative:15
}, {
  state: 'EXTRAVERSION',
  positive:25,
  negative:5
}, {
  state: 'AGREEABLENESS',
  positive:15,
  negative:10
},
{
  state: 'NEUROTICISM',
  positive:10,
  negative:5
}];
 class DoubleBarChart extends React.PureComponent {
  constructor(props) {
    super(props);

    
    this.state = {
      data: this.props.ocean,
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
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="positive"
            argumentField="state"
            name="Positive"
          />
          <BarSeries
            valueField="negative"
            argumentField="state"
            name="Negative"
          />
          <Title
            text="Big Five Factor Theory Report"
          />
          <Stack />
          <Legend/>
        </Chart>
      </Paper>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        ocean: state.ocean
    }
}

export default connect(mapStateToProps)(DoubleBarChart);