import React from 'react';
import styles from './Settings.module.css';


class Settings extends React.Component {

    state = {
        minValue: 0,
        maxValue: 0,
        error: false,
        buttonDisabled: true
    }



    onNewValueCounter = () => {
        let min = Number(this.state.minValue);
        let max = Number(this.state.maxValue);
        if ((min > max) || (min < 0) || (max < 0) || (min === max)) {
            this.setState({
                error: true,
            });
            this.props.onSendValueCounter("Error!", max)
            // this.props.onNewValueConter(, max)
        } else {
            this.setState({
                error: false
            });
            this.props.onSendValueCounter('Enter values and press "set"', max)
            // this.props.onNewValueConter('Enter values and press "set"', max)
        }
    }

    newMaxValueInput = (e) => {
        let newMaxValue = e.currentTarget.value;
        let isNumberValue = Number(newMaxValue);
        this.setState({
            maxValue: isNumberValue,
            buttonDisabled: false
        }, () => this.onNewValueCounter())
    }

    newMinValueInput = (e) => {
        let newMinValue = e.currentTarget.value;
        let isNumberValue = Number(newMinValue);
        this.setState({
            minValue: isNumberValue,
            buttonDisabled: false
        }, () => this.onNewValueCounter())

    }

    onSendValueCounter = () => {
        let min = this.state.minValue;
        let max = this.state.maxValue;
        this.props.onSendValueCounter(min, max)
    }



    render = () => {

        let classToError = this.state.error === true ? `${styles.inputError}` : `${styles.input}`


        return (
            <div className={styles.wrapper}>
                <div className={styles.settings}>
                    <span>min value</span>
                    <input className={classToError}
                           value={this.state.minValue}
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
                    <button disabled={this.state.buttonDisabled} onClick={this.onSendValueCounter}>set</button>
                </div>


            </div>
        )

    }

}

export default Settings;
