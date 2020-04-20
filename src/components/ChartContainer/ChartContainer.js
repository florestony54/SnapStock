import React from 'react';
import LineChart from '../LineChart/LineChart';
import NumberPanel from '../NumberPanel/NumberPanel';
import './chart-container.css';

class ChartContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            chart: null,
            data: null,
            dates: null,
            error: null,
            loading: null,
        }

        this.data = [];
        this.dates = [];
        this.load = [...Array(3)].map((e, i) => <div key={i} className="spinner-grow text-light" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>);
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
    }

    /* TODO: dynamic date ranges instead of fixed */
    handleSubmit = (event) => {
        this.setState({loading: this.load})
        fetch(// TODO: Server request
            )
        .then(response => response.json())
        .then(response => {
            let priceDate;
            let currentPrice;

            /* Reset Data */
            this.data = [];
            this.dates = [];
            this.setState({chart: null});
            this.setState({error: null});
            
            ////////////////

            console.log(response);

            for (let i=response.prices.length-1; i>0; i--){ //For each price in the data
                this.data.push(response.prices[i].close)
                // Dates
                priceDate = new Date(response.prices[i].date * 1000);
                priceDate = String(priceDate.toLocaleDateString())// getMonth()) + "/" + String(priceDate.getDate() + 1);
                this.dates.push(priceDate)
            }
            /* Update state with new data */
            this.setState({data: this.data});
            this.setState({dates: this.dates});
            this.setState({chart: <LineChart data={this.state.data} 
                                             dates={this.state.dates} 
                                             ticker={this.state.value}/>});
            this.setState({loading: null})
        }).then()        .catch(err => {
            console.log(err);
            this.setState({
                error: 
                <div className="alert alert-danger col-3" role="alert">
                    "{this.state.value.toUpperCase()}" is not valid. Please enter a valid ticker symbol.
                </div>,
                loading: null,
                chart: null})
        });
        
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <div className='search-bar'>
                    <form onSubmit={this.handleSubmit}>
                    <div className='row justify-content-md-center'>
                        <input className="form-control form-control-lg col-3" type='text' value={this.state.value} onChange={this.handleChange}></input>
                        <button className='btn btn-dark'>SUBMIT</button>
                    </div>
                    <div className='row justify-content-md-center'>
                    {this.state.error}
                    {this.state.loading}
                    </div>
                    
                    </form>
                </div>
                <div className='row justify-content-md-center' id='num-panels'>
                    <NumberPanel ticker={this.state.value} />
                </div>
                <div className='jumbotron container'>
                  {this.state.chart}
                </div>
                
            </div>
        )
    }
}

export default ChartContainer;