import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export
} from 'devextreme-react/pie-chart';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';


class Section2Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: this.props.risk
      };
  }


  render() {
    const { data: chartData } = this.state;
    return (
      <PieChart
        id="pie"
        dataSource={chartData}
        palette="Material"
        title="Prospect Theory Report"
        
      >
        <Series
          argumentField="character"
          valueField="value"
        />
          <Export enabled={true} />
      </PieChart>
    );
  }

  
}

const mapStateToProps=(state)=>{
    return{
        risk:state.risk
    }
}
export default connect(mapStateToProps)(Section2Chart)
