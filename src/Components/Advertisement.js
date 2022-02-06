import React, {Component} from 'react';
import styles from './App.module.css'

class Advertisement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.advertisement}>
            </div>
        )
    }
}

export default Advertisement