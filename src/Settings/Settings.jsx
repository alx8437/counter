import React from 'react';
import styles from './Settings.module.css';


class Settings extends React.Component {

    state = {
        minValue: 0,
        maxValue: 0,
        startValue: 0,
        error: false,
        buttonDisabled: true
    }

    newMaxValueInput = (e) => {
        let newMaxValue = e.currentTarget.value;
        this.setState({
            maxValue: newMaxValue,
            buttonDisabled: false
        })
    }

    newMinValueInput = (e) => {
        let newMinValue = e.currentTarget.value;
        this.setState({
            minValue: newMinValue,
            buttonDisabled: false
        });
        let min = this.state.minValue;
        let max = this.state.maxValue;
        if ((min > max) || (min < 0) || (max < 0) || (min === max)) {
            this.setState({
                error: true,
            });
            this.props.onNewValueConter("Error!", max)
        }


    }

    onNewValueCounter = () => {
        let min = Number(this.state.minValue);
        let max = Number(this.state.maxValue);
        if ((min > max) || (min < 0) || (max < 0) || (min === max)) {
            this.setState({
                error: true,
            });
            this.props.onNewValueConter("Error!", max)
        } else {
            this.setState({
                error: false,
            });
            this.props.onNewValueConter(min, max)
        }
    }


    render = () => {

        let classToError = this.state.error === true ? `${styles.inputError}` : `${styles.input}`


        return (
            <div className={styles.wrapper}>
                <div className={styles.settings}>
                    <span>start value</span>
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
                    <button disabled={this.state.buttonDisabled} onClick={this.onNewValueCounter}>set</button>
                </div>


            </div>
        )

    }

}

export default Settings;
