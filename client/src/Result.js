import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class Result extends Component{
    constructor(props){
        super(props);
        this.state = {chartData:[['Candiate Name', 'Total Votes']]};
    }

    async componentDidMount(){
        const candidates = await this.props.viewAllCandidate();
        candidates.map((candidate)=>{
            let info = [candidate.candidateName,candidate.candidateTotalVote];
            this.setState({chartData:[...this.state.chartData,info]});
        });
    }
    
    render(){
        return(
            <Chart
  width={'500px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={this.state.chartData}
  options={{
    // Material design options
    chart: {
      title: 'Current Voting Result',
      subtitle: 'Hover onto the bars to see actual number',
    },
  }}

/>
        );
    }
}