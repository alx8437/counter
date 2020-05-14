import React from 'react';
import styles from "./Counter.module.css"
class Counter extends React.Component {


    render = () => {


        let filterStop = this.props.filterValue === "stop" ? `${styles.stop}` : "";
        let disabledInc = this.props.minValue === this.props.maxValue;


        return (
            <div className={styles.wrapper}>
                <div className={styles.counter}>
                    <span className={filterStop}>{this.props.minValue}</span>
                </div>
                <div className={styles.wrapperForButton}>
                    <button disabled={disabledInc} onClick={()=>this.props.onRunCounter()}>inc</button>
                    <button onClick={()=>this.props.onResetValue()}>reset</button>
                </div>

            </div>
        )
    }

}

export default Counter;
