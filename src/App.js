import React, {useReducer} from 'react'
import styles from './App.module.css'
import {JoinBlock} from "./Components/JoinBlock/JoinBlock";
import socket from './socket'
import reducer from './reducer/reducer'


function App() {

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
    });

    const onLogin = (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
            roomId: null,
            useName: null,
        });
        socket.emit('ROOM:JOIN', obj);
    };

    window.socket = socket
    console.log(state);

    return (
        <>
            <>
                <div className={styles.wrapper}>
                    {!state.joined && <JoinBlock onLogin={onLogin}/>}
                </div>
            </>
            <div className={styles.footer}>
                <span>Let's Chat © 2021 Created by Gorky 52</span>
            </div>
        </>
    );
}

export default App;
