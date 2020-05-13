import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';
import {connect} from 'react-redux';
class DoubleBarChart extends React.Component {
    state = {
        data: this.props.ocean,
      }
  render() {
   
    return (
      <Chart id="chart"
        title="Big Five Factor Theory"
        dataSource={this.state.data}
        onPointClick={this.onPointClick}
        rotated
      >
        <CommonSeriesSettings
          argumentField="state"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={true}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        <Series
          argumentField="state"
          valueField="positive"
          name="positive"
        />
        <Series
          valueField="negative"
          name="negative"
        />
        
        <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
        <Export enabled={true} />
      </Chart>
    );
  }

  onPointClick(e) {
    e.target.select();
  }
}

const mapStateToProps=(state)=>{
    return{
        ocean: state.ocean
    }
}

export default connect(mapStateToProps)(DoubleBarChart);