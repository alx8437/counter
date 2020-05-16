import React from 'react';
import styles from "./Counter.module.css"
import Button from "../Button/Button";
class Counter extends React.Component {


    render = () => {


        let filterStop = this.props.filterValue === "stop" ? `${styles.stop}` : `${styles.defaultSpan}`;
        let disabledInc = this.props.minValue === this.props.maxValue ? true : false;


        return (
            <div className={styles.wrapper}>
                <div className={styles.counter}>
                    <span className={filterStop}>{this.props.minValue}</span>
                </div>
                <div className={styles.wrapperForButton}>
                    {/*<button disabled={disabledInc} onClick={()=>this.props.onRunCounter()}>inc</button>*/}
                    {/*<button onClick={()=>this.props.onResetValue()}>reset</button>*/}
                    <Button name={'inc'} func={this.props.onRunCounter}  disabled={disabledInc}/>
                    <Button name={'reset'} func={this.props.onResetValue}   />

                </div>

            </div>
        )
    }

}

export default Counter;
