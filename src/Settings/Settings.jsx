import React from 'react';
import styles from './Settings.module.css';


class Settings extends React.Component {

    state = {
        maxValue: 0,
        startValue: 0,
        error: false
    }

    newMaxValueInput = (e) => {
        this.setState({maxValue: e.currentTarget.value})
    }

    newMinValueInput = (e) => {
        this.setState({startValue: e.currentTarget.value})
    }

    onNewValueConter = () => {
        let min = Number(this.state.startValue);
        let max = Number(this.state.maxValue);
        if ((min > max) || (min < 0) || (max < 0) || (min === max)) {
            this.setState({
                error: true
            })
        }
        this.props.onNewValueConter(min, max)
    }




    render = () => {

        let classToError = this.state.error === true ? `${styles.inputError}` : `${styles.input}`


        return (
            <div className={styles.wrapper}>
                <div className={styles.settings}>
                    <span>start value</span>
                    <input className={classToError}
                        value={this.state.startValue}
                        type="number"
                        onChange={this.newMinValueInput}
                    />
                    <span>max value</span>
                    <input className={classToError}
                        value={this.state.maxValue}
                        onChange={this.newMaxValueInput}
                        type="number"
                    />
                </div>
                <div className={styles.wrapperForButton}>
                    <button onClick={this.onNewValueConter}>set</button>
                </div>


            </div>
        )

    }

}

export default Settings;
