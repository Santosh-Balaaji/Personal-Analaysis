import React from 'react';

import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export
} from 'devextreme-react/pie-chart';

import {connect} from 'react-redux';

class doughnut extends React.Component {
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
        type="doughnut"
        title="Prospect Theory Report"
        palette="Soft Pastel"
        dataSource={chartData}
      >
        <Series argumentField="character" valueField="value">
         
        </Series>
        <Export enabled={true} />
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          <Format type="millions" />
        </Tooltip>
      </PieChart>
    );
  }

  customizeTooltip(arg) {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`
    };
  }
}

const mapStateToProps=(state)=>{
    return{
        risk:state.risk
    }
}
export default connect(mapStateToProps)(doughnut);
