import React, {Component} from 'react';
import Advertisement from './Advertisement';
import styles from './App.module.css'
import SubContents from './SubContents';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.row}>
                    <div>
                        <SubContents/>
                    </div>
                    <div>
                        <SubContents/>
                    </div>
                    <div>
                        <SubContents/>
                    </div>
                </div>
                <div>
                    <Advertisement/>
                </div>
            </div>
        )
    }
}

export default Main