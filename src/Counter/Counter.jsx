import React from 'react';
import './Counter.css';


class Counter extends React.Component {


    render = () => {



        let filterStop = this.props.filterValue === "stop" ? "stop" : "";


        return (
            <div className={"counter"}>
                <span className={filterStop}>{this.props.counter}</span>
            </div>
        )
    }

}

export default Counter;
