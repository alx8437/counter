import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";


class App extends React.Component {

    state = {
        minValue: 0,
        maxValue: 5,
        filterValue: '',
        disabled: true,
        buttonsName: [
            {id: 0, name: "inc"},
            {id: 1, name: "reset"},
            {id: 2, name: "set"}
        ]

    }



    onRunCounter = () => {
        if (this.state.minValue < this.state.maxValue) {
            let counting = this.state.minValue + 1;
            if (counting === this.state.maxValue) {
                this.setState({
                    minValue: counting,
                    filterValue: 'stop'
                })
            } else {
                this.setState({
                    minValue: counting,
                })
            }
        }
    }

    onResetCounter = () => {
        this.setState({
            minValue: 0,
            filterValue: ''
        })
    }

    onNewValueConter = (min, max) => {
        this.setState({
            minValue: min,
            maxValue: max
        })
    }


    render(){
        return (
            <div className={styles.app}>
                <Counter
                    minValue={this.state.minValue}
                    maxValue={this.state.maxValue}
                    changeFilter={this.changeFilter}
                    filterValue={this.state.filterValue}
                    onRunCounter={this.onRunCounter}
                    onResetCounter={this.onResetCounter}
                />
                <Settings
                    buttonsName={this.state.buttonsName}
                    onNewValueConter={this.onNewValueConter}
                />
            </div>
        )
    }

}

export default App;
