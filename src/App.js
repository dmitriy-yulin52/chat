import React from 'react'
import styles from './App.module.css'
import {JoinBlock} from "./Components/JoinBlock";
import socket from './socket'




function App() {
    return (
        <>
            <div className={styles.wrapper}>
                <JoinBlock/>
            </div>
            <div className={styles.footer}>
                <span>Gorky 52</span>
            </div>
        </>
    );
}

export default App;
