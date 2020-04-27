import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter/Counter";
import Buttons from "./Buttons/Buttons";


class App extends React.Component {

    state = {

        counter: 0,

        filterValue: '',

        disabled: true

    }

    onRunCounter = () => {
        if (this.state.counter < 5) {
            let counting = this.state.counter + 1;
            if (counting === 5) {
                this.setState({
                    counter: counting,
                    filterValue: 'stop'
                })
            } else {
                this.setState({
                    counter: counting,
                })
            }
        }
    }


    onResetCounter = () => {
        this.setState({
            counter: 0,
            filterValue: ''


        })
    }


    render(){
        return (
            <div className={styles.app}>
                <Counter
                    counter={this.state.counter}
                    changeFilter={this.changeFilter}
                    filterValue={this.state.filterValue}
                />
                <Buttons
                    onRunCounter={this.onRunCounter}
                    onResetCounter={this.onResetCounter}
                    counter={this.state.counter}
                />
            </div>
        )
    }

}

export default App;
