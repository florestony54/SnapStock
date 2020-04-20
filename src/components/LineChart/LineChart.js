import {Line} from 'react-chartjs-2';
import React from 'react';

class LineChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                    labels: this.props.dates, 
                    datasets: 
                        [{
                            label: 'Price ($)',
                            backgroundColor: 'rgba(135, 15, 255, 0.2)',
                            borderColor: 'rgba(135, 15, 255, 1)',
                            borderWidth: 2,
                            data: this.props.data
                        }],
                    },
                    options: {
                        scales:{
                            xAxes: [{gridLines: { color: "#343a40" }}],
                            yAxes: [{gridLines: { color: "#343a40" }}]
                        },
                        spanGaps: true,
                        title:{
                            display:true,
                            text:`Stock Price (${this.props.ticker.toUpperCase()})`,
                            fontSize:20,
                            fontColor: '#fffd'
                        },
                        legend:{
                            labels: {
                                fontColor: '#fffd'
                            },
                            display:true,
                            position:'right'
                        },
                        
                    },     
                                           
            }

        this.dataset = [];
        this.options = this.state.options;
    }

    static getDerivedStateFromProps (props, current_state) {
        if ( current_state.data.datasets.data === [] ) {
            return{
                data:{
                        datasets:[{
                            data: this.props.data
                        }]
                }
            }
        }

        if ( current_state.data.labels === [] ) {
            return{
                data:{
                        labels: this.props.dates
                    }                
            }
        }
        return null
    }

    componentDidUpdate(){
        console.log(this.state.data.datasets.data)
    }

    render() {
        return(
            
            <div id="line-chart">
                <Line
                    data={this.state.data}
                    options={this.options}
                    />
            </div>
        )
    }
}

export default LineChart;