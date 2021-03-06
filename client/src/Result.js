import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from 'react-bootstrap';

export default class Result extends Component{
    constructor(props){
        super(props);
        this.state = {chartData:[['Candiate Name', 'Total Votes']]};
    }
    async componentDidMount(){
        const candidates = await this.props.viewAllCandidate();
        candidates.forEach((candidate)=>{
            let tmp = parseInt(candidate.candidateTotalVote, 10);
            let info = [candidate.candidateName, tmp];
            this.setState({chartData:[...this.state.chartData,info]});
        });
    }
    render(){
        return(
            <Card>
            <Card.Body>
                <Chart
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
            </Card.Body>
            </Card>
        );
    }
}