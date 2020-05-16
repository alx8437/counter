import React from "react";
import styles from "./Button.module.css"


class Button extends React.Component {

    render() {

        return (
            <div className={styles.button}>
                <button disabled={this.props.disabled} onClick={this.props.func}>{this.props.name}</button>
            </div>
        )

    }
}

export default Button