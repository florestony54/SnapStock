import React from 'react';
// import './panel.css';
// import LineChart from '../LineChart/LineChart';
// import RadarChart from '../RadarChart/RadarChart';
// import PieChart from '../PieChart/PieChart';
// import ScatterPlot from '../ScatterPlot/ScatterPlot';
// import NumberPanel from '../NumberPanel/NumberPanel';
// import BarChart from '../BarChart/BarChart';
// import DoughnutChart from '../DoughnutChart/DoughnutChart';
// import ChartContainer from '../ChartContainer/ChartContainer';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chart: null,
        }
    }

    componentDidMount(){
        // switch(this.props.type) {
        //     case 'line':
        // this.setState({chart: <ChartContainer />}); //<LineChart dataset={this.props.dataset} icon={this.props.icon}/>});
        //         break;
        //     case 'radar':
        //         this.setState({chart: <RadarChart icon={this.props.icon}/>});
        //         break;
        //     case 'pie':
        //         this.setState({chart: <PieChart icon={this.props.icon}/>});
        //         break;
        //     case 'bar':
        //         this.setState({chart: <BarChart icon={this.props.icon}/>});
        //         break;
        //     case 'scatter':
        //         this.setState({chart: <ScatterPlot icon={this.props.icon}/>});
        //         break;
        //     case 'number':
        //         this.setState({chart: <NumberPanel number={this.props.number} icon={this.props.icon}/>});
        //         break;
        //     case 'doughnut':
        //         this.setState({chart: <DoughnutChart number={this.props.number} icon={this.props.icon} title={this.props.title} />})
        //     }
        }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='card-text'>
                        {this.state.chart}
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel;