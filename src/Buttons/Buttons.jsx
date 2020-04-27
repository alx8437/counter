import React from 'react';
import styles from './Buttons.module.css';



class Buttons extends React.Component {

    render= () => {

        let disabledInc = this.props.counter === 5;
        let dosabledReturn = this.props.counter < 5;

        return (
            <div className={styles.wrapper}>
                <button disabled={disabledInc} onClick={()=>this.props.onRunCounter()}>inc</button>
                <button disabled={dosabledReturn} onClick={()=>this.props.onResetCounter()}>return</button>
            </div>
        )
    }

}

export default Buttons;
