import React from 'react';
import ChartContainer from '../ChartContainer/ChartContainer'

// import './main-panel.css';


class MainPanel extends React.Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='main-panel'>
                
                    <div className='row' id='big-panels'>            
                        <div className='col-md big-panel'>
                            <ChartContainer />
                        </div>
                                         
                    </div>
            </div>
        )
    }
}

export default MainPanel;