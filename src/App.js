import React, {useReducer} from 'react'
import styles from './App.module.css'
import {JoinBlock} from "./Components/JoinBlock/JoinBlock";
import socket from './socket'
import reducer from './reducer/reducer'


function App() {

    const [state,dispatch] = useReducer(reducer,{
        isAuth:false,
    })
    return (
        <>
            <>
                <div className={styles.wrapper}>
                    <JoinBlock/>
                </div>
            </>
            <div className={styles.footer}>
                <span>Let's Chat © 2021 Created by Gorky 52</span>
            </div>
        </>
    );
}

export default App;
