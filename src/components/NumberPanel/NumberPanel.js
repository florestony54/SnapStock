import React from 'react';
import './number-panel.css';

class NumberPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ticker: '',
            price: null
        }
    }

    render() {
        return (
            <div className='jumbotron col-4'>
                <h1 style={{'color': 'white'}}>{this.props.ticker}</h1>
                {this.state.ticker}
            </div>
        )
    }
}

export default NumberPanel;